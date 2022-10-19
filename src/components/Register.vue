<template>
  <div v-if="show" class="register">
    <div class="form-group">
      <input v-model="form.email" type="email" placeholder="Email" />
    </div>
    <div class="form-group">
      <input v-model="form.username" type="text" placeholder="Username" />
    </div>
    <div class="form-group">
      <input v-model="form.password" type="password" placeholder="Password" />
    </div>
    <div class="form-group">
      <input
        v-model="form.confirm_password"
        type="password"
        placeholder="Confirm password"
      />
    </div>
    <div class="form-group btn-register">
      <button @click="register" class="btn">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  props: ["show"],
  methods: {
    register() {
      this.$emit("register", this.form);
    },
  },
};
</script>
