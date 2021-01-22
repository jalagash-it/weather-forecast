<template>
  <b-container>
    <b-row>
      <b-col cols="12" lg="6" offset-lg="3" class="login-wrapper">
        <h1>Вход в систему</h1>
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

          <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              placeholder="введите пароль"
              required
            ></b-form-input>
          </b-form-group>

          <b-row>
            <b-col>
              <b-button type="submit" variant="primary" block> Войти </b-button>
            </b-col>
            <b-col>
              <b-button type="reset" variant="secondary" block>
                Сбросить форму
              </b-button>
            </b-col>
          </b-row>
        </b-form>
        <b-link class="redirect-to-register-page" to="/register"
          >Перейти на страницу Регистрации</b-link
        >
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import http from "../services/http";
export default {
  data() {
    return {
      form: { email: "", password: "" },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      http.post("/login", this.form).then((res) => {
        localStorage.setItem("token", res.data);
        this.$router.push("/");
      });
    },
    onReset() {
      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>
<style scoped lang="scss">
.login-wrapper {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  width: 100%;
}
.redirect-to-register-page {
  margin: 16px;
}
</style>