import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      keepAlive: true, //此组件需要被缓存
    },
    component: HomeView,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/list",
    name: "List",
    meta: {
      keepAlive: true, //此组件需要被缓存
    },
    component: () => import("../views/ListView.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/my",
    name: "My",
    component: () => import("../views/MyView.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/SearchView.vue"),
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("../views/search/SearchIndex.vue"),
      },
      {
        path: "/list",
        name: "list",
        component: () => import("../views/search/SearchList.vue"),
      },
    ],
  },
  {
    path: "/detail",
    name: "Detail",
    meta: {
      keepAlive: true, //此组件需要被缓存
    },
    component: () => import("../views/DetailView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/LoginView.vue"),
  },
  {
    path: "/userLogin",
    name: "UserLogin",
    component: () => import("../views/login/UserLogin.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/login/RegisterView.vue"),
  },
  {
    path: "/recovery",
    name: "Recovery",
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("../views/recovery/RecoveryIndex.vue"),
      },
      {
        path: "btn",
        name: "btn",
        component: () => import("../views/recovery/RecoveryBtn.vue"),
      },
    ],
    component: () => import("../views/recovery/RecoveryView.vue"),
  },
  {
    path: "/path",
    name: "Path",
    children: [
      {
        path: "/",
        name: "pathIndex",
        component: () => import("../views/path/PathIndex.vue"),
      },
      {
        path: "path-list",
        name: "path-list",
        component: () => import("../views/path/PathList.vue"),
      },
    ],
    component: () => import("../views/PathView.vue"),
  },
  {
    path: "/order",
    name: "Order",
    meta: {
      keepAlive: true, //此组件需要被缓存
    },
    component: () => import("../views/OrderView.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("../views/PaymentView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let nextRoute = [
    "Payment",
    "Cart",
    "Path",
    "Order",
    "pathIndex",
    "path-list",
  ];
  //是否是登录中
  let userInfo = JSON.parse(localStorage.getItem("teaUserInfo"));

  //当前进入的页面，是不是需要验证哪些页面
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!userInfo) {
      router.push("/login");
    }
  }

  next();
});

export default router;
