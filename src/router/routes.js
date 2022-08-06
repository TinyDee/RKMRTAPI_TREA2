const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "Personajes",
        name: "Personajes",
        component: () => import("pages/Personajes.vue"),
      },
      {
        path: "Locaciones",
        name: "Locaciones",
        component: () => import("pages/Locaciones.vue"),
      },
      {
        path: "Episodios",
        name: "Episodios",
        component: () => import("pages/Episodios.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
