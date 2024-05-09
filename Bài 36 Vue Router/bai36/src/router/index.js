import { createRouter, createWebHistory } from "vue-router";
import About from "@/components/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/About",
      component: About,
    },
  ],
});

export default router;
