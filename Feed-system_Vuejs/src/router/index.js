import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import FeedDetail from "../components/FeedDetail.vue";
import NotFound from "../components/NotFound.vue";
import "es6-promise/auto";
Vue.use(VueRouter);
Vue.use("http://localhost:8080/f/:fid/style.css");

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/f/:fid", component: FeedDetail },
    { path: "*", component: NotFound }
  ]
});

export default router;
