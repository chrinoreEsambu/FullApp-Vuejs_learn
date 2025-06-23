import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import Login from "../components/AddNote.vue";
import Register from "../components/NoteList.vue";
import Add from "../Pages/Add.vue";
import Home from "../Pages/Home.vue";
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
  { path: "/add", name: Add, component: Add },
  { path: "/home ", name: Home, component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {},
});

export default router;
