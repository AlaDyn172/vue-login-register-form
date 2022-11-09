// Default
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


let app = createApp(App);
app.use(store);
app.use(router);
app.use(Toast, {
  timeout: 2500
});
app.mount("#app");
