<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Погода в мире</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Название города"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Поиск</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right v-if="user && user.email">
            <template #button-content>
              <em>{{ user.email }}</em>
            </template>
            <b-dropdown-item to="/profile">Профиль</b-dropdown-item>
            <b-dropdown-item @click="logout">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right v-else>
            <template #button-content>
              <em>Гость</em>
            </template>
            <b-dropdown-item to="/register">Регистрация</b-dropdown-item>
            <b-dropdown-item to="/login">Войти</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>
