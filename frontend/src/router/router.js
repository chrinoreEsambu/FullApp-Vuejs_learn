import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {},
});


export default router;
