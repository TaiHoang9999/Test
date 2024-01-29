import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
    {
      path: "/test",
      name: "Home",
      component: Home,
    },
   
    // { path: "*", component: PageNotFound }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;