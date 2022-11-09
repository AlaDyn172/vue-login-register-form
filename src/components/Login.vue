<template>
  <div v-if="show" class="login">
    <div class="form-group">
      <input v-model="form.username" type="text" placeholder="Username" />
    </div>
    <div class="form-group">
      <input @keypress.enter="login" v-model="form.password" type="password" placeholder="Password" />
    </div>
    <div class="form-group">
      <input v-model="form.remember_me" type="checkbox" />
      <div>Remember me</div>
    </div>
    <div class="form-group btn-login">
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  props: ["show"],
  data() {
    return {
      form: {
        username: "",
        password: "",
        remember_me: false,
      },
    };
  },
  methods: {
    login() {
      this.$emit("login", this.form);
    },
  },
};
</script>
