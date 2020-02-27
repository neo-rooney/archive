import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";
import Board from "../components/Board.vue";
import Card from "../components/Card.vue";

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  console.log(to);
  const isAuth = localStorage.getItem("token");
  //접근하려했던 url을 기억했다가 login하면 그 곳으로 다시 보내준다.
  const loginPath = `/login?rpath=${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath);
};

const routes = [
  { path: "/", component: Home, beforeEnter: requireAuth },
  { path: "/login", component: Login },
  {
    path: "/b/:bid",
    component: Board,
    beforeEnter: requireAuth,
    children: [{ path: "c/:cid", component: Card, beforeEnter: requireAuth }]
  },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
