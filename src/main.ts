import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

const toastOptions: ToastContainerOptions = {
  autoClose: 5000,
  position: "top-right",
  theme: "light",
};

app.use(Vue3Toastify, toastOptions);
app.mount("#app");
