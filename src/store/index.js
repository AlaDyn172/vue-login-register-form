import { createStore } from 'vuex'
import router from '../router/index'

import { useToast } from "vue-toastification";
const toast = useToast();

import axios from "axios";

import { validateEmail } from "../scripts/helpers";

export default createStore({
  state: {
    user: {},
    token: null
  },
  getters: {
    authenticated(state) {
      return !state.token ? false : true;
    }
  },
  mutations: {
    set_user(state, user) {
      state.user = user;
    },
    set_token(state, token) {
      state.token = token;
    }
  },
  actions: {
    async get_user({ commit }, form) {
      await axios.get(
        `http://localhost:1337/api/user?username=${form.username}&password=${form.password}`
      ).then(res => {
        if (!res.data) return toast.error(`No user found with these credentials!`);

        let { user, token } = res.data;
        commit("set_user", user);
        commit("set_token", token);

        toast.success(`You have successfully logged in!`);
        router.push("/user");
      }).catch(e => {
        if (e.response.status == 400) return toast.error(`Please complete the fields!`);
        toast.error(e.toString());
      });
    },
    async create_user({ commit }, form) {
      // hard-coded checks for registration
      if (form.username.length < 3) return toast.error(`Minimum length for username is 3 characters long!`);
      if (form.username.length > 16) return toast.error(`Maximum length for username is 16 characters long!`);
      if (form.password != form.confirm_password) return toast.error(`Passwords are not equal!`);
      if (!validateEmail(form.email)) return toast.error(`Invalid email!`);
      if (form.password.length < 8) return toast.error(`Minimum length for password is 8 characters long!`);
      if (form.password.length > 16) return toast.error(`Maximum length for password is 16 characters long!`);
      // 

      await axios.post(
        `http://localhost:1337/api/user`,
        form
      ).then(res => {

        let { user, token } = res.data;
        commit("set_user", user);
        commit("set_token", token);

        toast.success(`You have successfully registered!`);
        router.push("/user");
      }).catch(e => {
        if (e.response.status == 400) return toast.error(`Please complete the fields!`);
        if (e.response.status == 402) return toast.error(`Email or username already exists!`);
        toast.error(e.toString());
      });
    }
  },
  modules: {
  }
})
