import { useAuthStore } from "@/store/auth.store";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Landing",
        meta: { requiresAuth: false },
        component: () => import("@/views/Landing.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        meta: { requiresAuth: true },
        component: () => import("@/views/Profile.vue"),
      },
      {
        path: "team",
        name: "Team",
        meta: { requiresAuth: true },
        component: () => import("@/views/Team.vue"),
      },
      {
        path: "change-password",
        name: "Change Password",
        meta: { requiresAuth: true },
        component: () => import("@/views/ChangePassword.vue"),
      },
      {
        path: "login",
        name: "Login",
        meta: { requiresAuth: false },
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        meta: { requiresAuth: false },
        component: () => import("@/views/Register.vue"),
      },
      {
        path: "verify-email",
        name: "Verify Email",
        component: () => import("@/views/VerifyEmail.vue"),
      },
      {
        path: "home",
        name: "Home",
        meta: { requiresAuth: false },
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "my-routines",
        name: "Routines",
        meta: { requiresAuth: true },
        component: () => import("@/views/Routines.vue"),
      },
      {
        path: "routine",
        name: "Routine",
        meta: { requiresAuth: false },
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
            meta: { requiresAuth: false },
            component: () => import("@/views/RoutineCreate.vue"),
          },
        ],
      },
      {
        path: "settings",
        name: "Settings",
        meta: { requiresAuth: true },
        component: () => import("@/views/Settings.vue"),
      },

      {
        path: "exercises",
        name: "Exercises",
        meta: { requiresAuth: true },
        component: () => import("@/views/Exercises.vue"),
      },
      {
        path: "/:notFound",
        name: "PathNotFound",
        meta: { requiresAuth: false },
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
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router;

// Esto es para validar q los usuarios esten logueados antes de pasar a otro lado
// Esta el meta q es para definir si necesita estar logueado o no
// Lo comente xq falta terminar de implementar bien el login y register
/*router.beforeEach((to,from,next)=>{
  if(to.matched.some(route=>route.meta.requiresAuth)){
    // hay q hacer la validacion de si esta logueado
    // si no esta logueado lo mandamos al login
    if(0){
      next({name:"login"})
    }else{
      next()
    }
  }
})*/
