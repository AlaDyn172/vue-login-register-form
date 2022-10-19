<template>
  <div class="navbar">
    <div @click="select('login')" :class="current_view == 'login' ? 'selected' : ''">
      Login
    </div>
    <div
      @click="select('register')"
      :class="current_view == 'register' ? 'selected' : ''"
    >
      Register
    </div>
  </div>
</template>

<script>
export default {
  name: "FormNavbar",
  props: ["formview"],
  data() {
    return {
      current_view: "login",
    };
  },
  methods: {
    select(page) {
      this.$emit("formview", page);
    },
  },
  watch: {
    formview(newView) {
      this.current_view = newView ? "login" : "register";
    },
  },
};
</script>
