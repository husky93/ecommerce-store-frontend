import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/store",
      name: "store",
      component: () => import("../views/StoreView.vue"),
    },
    {
      path: "/category/:id",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/item/:id",
      name: "item",
      component: () => import("../views/ItemView.vue"),
    },
  ],
});

export default router;
