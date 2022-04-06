const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]

  // },
  {
    path: "/",
    component: () => import("../pages/index.vue"),
    meta: {
      layout: "main-layout",
    },
  },
  {
    path: "/game",
    component: () => import("../pages/game.vue"),
    meta: {
      layout: "main-layout",
    },
  },
  {
    path: "/about",
    component: () => import("../pages/about.vue"),
    meta: {
      layout: "main-layout",
    },
  },
  // // Always leave this as last one,
  // // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/Error404.vue')
  // }
];

export default routes;
