import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";

const Pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(Pinia);
app.mount("#app");


