import { useSecurityStore } from "@/stores/SecurityStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      /* Public pages */
      {
        path: "",
        component: () => import("@/views/Landing.vue"),
      },
      {
        path: "about-us",
        component: () => import("@/views/AboutUs.vue"),
      },
      {
        path: "contact",
        component: () => import("@/views/Contact.vue"),
      },
      {
        path: "services",
        component: () => import("@/views/Services.vue"),
      },
      {
        path: "login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "register",
        component: () => import("@/views/Register.vue"),
      },
      {
        path: "verify-email",
        component: () => import("@/views/VerifyEmail.vue"),
      },

      /* Private pages */
      {
        path: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "my-routines",
        component: () => import("@/views/Routines.vue"),
      },
      {
        path: "liked-routines",
        component: () => import("@/views/LikedRoutines.vue"),
      },
      {
        path: "exercises",
        component: () => import("@/views/Exercises.vue"),
      },
      {
        path: "routine",
        children: [
          {
            path: ":id",
            component: () => import("@/views/CreateRoutine.vue"),
          },
          {
            path: "create",
            component: () => import("@/views/CreateRoutine.vue"),
          },
        ],
      },
      {
        path: "settings",
        component: () => import("@/views/Settings.vue"),
      },
      {
        path: "/:notFound",
        component: () => import("@/views/PageNotFound.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const publicPages = [
    "/",
    "/about-us",
    "/contact",
    "/services",
    "/login",
    "/register",
    "/verify-email",
  ];
  const authRequired = !publicPages.includes(to.path);
  const securityStore = useSecurityStore();
  securityStore.initialize();

  if (authRequired && !securityStore.isLoggedIn) {
    securityStore.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router;
