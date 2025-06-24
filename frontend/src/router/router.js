import { createRouter, createWebHistory } from "vue-router";
import Add from "../Pages/Add.vue";
import Home from "../Pages/Home.vue";

const routes = [
  
  { path: "/", name: "Add", component: Add },
  { path: "/home", name: "Home", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
