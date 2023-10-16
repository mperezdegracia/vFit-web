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
        name: "Landing",
        component: () => import("@/views/Landing.vue"),
      },
      {
        path: "team",
        name: "Team",
        component: () => import("@/views/Team.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/views/Register.vue"),
      },
      {
        path: "verify-email",
        name: "Verify Email",
        component: () => import("@/views/VerifyEmail.vue"),
      },

      /* Private pages */
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "my-routines",
        name: "Routines",
        component: () => import("@/views/Routines.vue"),
      },
      {
        path: "routine",
        name: "Routine",
        children: [
          {
            //path: ":id",
            path: "detailed", // cambio de path para testear
            name: "Detailed-Routine",
            component: () => import("@/views/DetailedRoutine.vue"),
          },
          {
            path: "create",
            name: "Create-Routine",
            component: () => import("@/views/RoutineCreate.vue"),
          },
        ],
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/views/Profile.vue"),
      },
      {
        path: "change-password",
        name: "Change Password",
        component: () => import("@/views/ChangePassword.vue"),
      },
      {
        path: "settings",
        name: "Settings",
        component: () => import("@/views/Settings.vue"),
      },
      {
        path: "/:notFound",
        name: "PathNotFound",
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
  const publicPages = ["/", "/team", "/login", "/register", "/verify-email"];
  const authRequired = !publicPages.includes(to.path);
  const securityStore = useSecurityStore();

  if (authRequired && !securityStore.isLoggedIn) {
    securityStore.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router;
