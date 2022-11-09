<template>
  <div class="user">
    <div>Hello, {{ current_user.username }}!</div>
    <div>Account creation: {{ new Date(current_user.createdAt).toLocaleString() }}</div>
    <div>Your last login: {{ new Date(current_user.updatedAt).toLocaleString() }}</div>
    <div>&nbsp;</div>
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {};
  },
  computed: {
    current_user() {
      return this.$store.state.user;
    },
  },
};
</script>
