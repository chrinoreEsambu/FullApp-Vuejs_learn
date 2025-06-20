import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";

const app = createApp(App);
const Pinia = createPinia();


app.use(Pinia);
app.use(router);
app.mount("#app");
