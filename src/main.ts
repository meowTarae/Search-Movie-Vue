import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes";
import App from "./App.vue";
import "./main.scss";

createApp(App).use(router).use(createPinia()).mount("#app");
