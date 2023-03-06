import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Jobs from "../views/jobs/JobsPage.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-spli tting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
  },
  {
    path: "/jobs",
    name: "JobsPage",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
