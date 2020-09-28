import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Counter from "../views/Counter.vue";
import FetchData from "../views/FetchData.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/fetch-data",
    name: "Fetch Data",
    component: FetchData,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
