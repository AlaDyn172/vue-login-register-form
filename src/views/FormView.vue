<template>
  <div>
    <div class="form">
      <FormNavbar :formview="login" @formview="formview" />
      <Login @login="__login" :show="login" />
      <Register @register="__register" :show="!login" />
    </div>
  </div>
</template>

<script>
import FormNavbar from "../components/FormNavbar";
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  name: "FormView",
  data() {
    return {
      login: true,
    };
  },
  methods: {
    formview(type) {
      if (type == "login") this.login = true;
      else this.login = false;
    },
    __login(form) {
      this.$store.dispatch("get_user", form);
    },
    __register(form) {
      this.$store.dispatch("create_user", form);
    },
  },
  components: {
    FormNavbar,
    Login,
    Register,
  },
};
</script>
