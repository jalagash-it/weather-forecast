<template>
  <b-container>
    <b-row>
      <b-col cols="12" lg="6" offset-lg="3" class="register-wrapper">
        <h1>Регистрация</h1>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Эл. почта:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="введите email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="Аккаунт:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.login"
              placeholder="выберите аккаунт"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              placeholder="введите пароль"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Подтверждение:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              type="password"
              v-model="form.confirm"
              placeholder="подтвердите пароль"
              required
            ></b-form-input>
          </b-form-group>
          <b-row>
            <b-col>
              <b-button type="submit" variant="primary" block>
                Регистрироваться
              </b-button>
            </b-col>
            <b-col>
              <b-button type="reset" variant="secondary" block>
                Сбросить форму
              </b-button>
            </b-col>
          </b-row>
        </b-form>
        <b-link class="redirect-to-login-page" to="/login"
          >Перейти на страницу логина</b-link
        >
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: { email: "", login: "", password: "", confirm: "" },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const self = this;
      axios
        .post("/api/register", this.form)
        .then(() => {
          self.$router.push({ name: "Login", query: { registered: "1" } });
        })
        .catch((err) => {
          switch (err.response.status) {
            case 400:
              {
                this.$bvToast.toast("Не валидные данные !", {
                  title: "Ошибка",
                  solid: true,
                  variant: "danger",
                });
              }
              break;
            case 409:
              {
                this.$bvToast.toast(
                  "Пользователь с таким email/логин уже зарегистрирован !",
                  {
                    title: "Ошибка",
                    solid: true,
                    variant: "danger",
                  }
                );
              }
              break;
            default:
              {
                this.$bvToast.toast("Произошла ошибка !", {
                  title: "Ошибка",
                  solid: true,
                  variant: "danger",
                });
              }
              break;
          }
        });
    },
    onReset() {
      this.form.email = "";
      this.form.login = "";
      this.form.password = "";
      this.form.confirm = "";
    },
  },
};
</script>
<style scoped lang="scss">
.register-wrapper {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  width: 100%;
}
.redirect-to-login-page {
  margin: 16px;
}
</style>