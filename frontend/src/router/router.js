import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

const routes = [
  {
    path: "/",
    name: Login,
    component: Login,
  },
  {
    path: "/register",
    name: Register,
    component: Register,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {},
});

export default router;
