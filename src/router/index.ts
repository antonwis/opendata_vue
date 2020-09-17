import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
//import Home from "../views/Home.vue";
import Employees from "../components/Employees.vue";
import CityBikes from "../components/CityBikes.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Employees",
    component: Employees
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/citybikes",
    name: "Citybikes",
    component: CityBikes
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
