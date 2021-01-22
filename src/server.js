import { Server, Response } from 'miragejs'
import faker from 'faker';

const db = {
    insert(tableName, payload) {
        const table = JSON.parse(localStorage.getItem(tableName)) || [];
        table.push(payload);
        localStorage.setItem(tableName, JSON.stringify(table));
    },
    where(tableName, callback) {
        const table = JSON.parse(localStorage.getItem(tableName));
        if (!table)
            return [];
        return table.filter(callback);
    },
    update(tableName, arr, idx, payload) {
        Object.assign(arr[idx], payload);
        localStorage.setItem(tableName, JSON.stringify(arr));
    }
};
export function fakeServer({ environment = "development" } = {}) {

    let server = new Server({
        environment,


        seeds() {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (!users.find(u => u.email === "test@mail.ru" && u.password === "test"))
                db.insert('users', { email: "test@mail.ru", password: "test" });
        },

        routes() {

            this.namespace = "api";

            this.post("/register", (schema, request) => {

                const payload = JSON.parse(request.requestBody);

                if (!isValidRegisterPayload(payload)) {
                    return new Response(400, {}, { message: 'bad request' });
                }
                if (db.where('users', u => u.email === payload.email || u.login === payload.login).length > 0) {
                    return new Response(409);
                }
                db.insert('users', payload);
                return new Response(200);

            });
            this.post("/login", (schema, request) => {
                const payload = JSON.parse(request.requestBody);

                const users = db.where('users', u => u.email === payload.email && u.password === payload.password);

                if (users.length) {
                    const token = faker.random.alphaNumeric(100);
                    db.update('users', users, 0, { token: token });
                    return token;
                } else
                    return new Response(403)

            });
            this.post('/check', (schema, request) => {

                const token = request.requestHeaders.token;
                const users = db.where('users', u => u.token === token);
                if (!users.length) {
                    return new Response(403);
                }

                const { id, email } = users[0];
                return new Response(200, {}, { user: { id, email } });
            })
            this.post("/logout", (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                const users = db.where('users', u => u.email === payload.email && u.token === payload.token);
                if (!users || !users.length)
                    return new Response(403);
                else {
                    db.update('users', users, 0, { token: faker.random.alphaNumeric(100) });
                    return new Response(200);
                }

            })

        },
    })

    return server
}

const isValidRegisterPayload = function(payload) {

    //safely trim login
    payload.login = (typeof payload.login).toLowerCase() === 'string' && payload.login.replace(/\s+?/g, '');

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