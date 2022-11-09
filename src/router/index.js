import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import UserView from '../views/UserView.vue'

import store from "../store/index"

const routes = [
  {
    path: '/',
    name: 'home',
    component: FormView
  },
  {
    path: '/user',
    name: 'User',
    component: UserView,
    beforeEnter: [isAuthenticated]
  }
]

function isAuthenticated(to, from, next) {
  console.log(store.getters.authenticated);
  if (!store.getters.authenticated) return next({ path: "/" });
  next();
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
