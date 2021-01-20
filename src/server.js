import { Server, Model, Response, Factory } from 'miragejs'
import faker from 'faker';
export function fakeServer({ environment = "development" } = {}) {

    let server = new Server({
        environment,

        models: {
            users: Model,
        },
        factories: {
            users: Factory.extend({

            }),
        },
        // seeds(server) {
        //     server.create("users", { email: "test@mail.ru", password: "test" })
        // },

        routes() {

            this.namespace = "api";

            this.post("/register", (schema, request) => {

                const payload = JSON.parse(request.requestBody);
                console.log(payload)
                if (!isValidRegisterPayload(payload)) {
                    return new Response(400, { message: 'bad request' });
                }
                if (schema.users.where(u => u.email === payload.email || u.login === payload.login).length > 0) {
                    return new Response(409);
                }
                schema.users.create(payload);
                return new Response(200);

            });
            this.post("/login", (schema, request) => {
                const payload = JSON.parse(request.requestBody);

                const users = schema.users.where(u => u.email === payload.email && u.password === payload.password);
                console.log(users);
                if (users && users.length) {
                    const token = faker.random.alphaNumeric(100);
                    users.models[0].update({ token: token });
                    return token;
                } else
                    return new Response(403)

            });
            this.post("/logout", (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                const users = schema.users.where(u => u.email === payload.email && u.token === payload.token);
                if (!users || !users.length)
                    return new Response(403);
                else {
                    users.models[0].update({ token: faker.random.alphaNumeric(100) });
                    return new Response(200);
                }

            })

        },
    })

    return server
}

const isValidRegisterPayload = function(payload) {
    return isValidEmail(payload.email) && isValidLogin(payload.login) && isValidPassword(payload.password) && payload.password === payload.confirm;
}

const isValidEmail = function(email) {
    //eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const isValidLogin = function(login) {
    if (!login)
        return false;
    login = String(login).trim();
    return /^\w+$/.test(login);
}
const isValidPassword = function(password) {
    //eslint-disable-next-line
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(password);
}