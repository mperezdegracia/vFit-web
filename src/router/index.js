// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Landing",
        meta: { requiresAuth: false },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Landing.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Profile.vue"),
      },
      {
        path: "team",
        name: "Team",
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Team.vue"),
      },
      {
        path: "change-password",
        name: "Change Password",
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ChangePassword.vue"),
      },
      {
        path: "login",
        name: "Login",
        meta: { requiresAuth: false },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        meta: { requiresAuth: false },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Register.vue"),
      },
      {
        path: "home",
        name: "Home",
        meta: { requiresAuth: false },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home
      },
      {
        path: "my-routines",
        name: "Routines",
        meta: { requiresAuth: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Routines.vue"),
      },
      {
        path: "routine",
        name: "Routine",
        meta: { requiresAuth: false },

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        children: [
          {
            //path: ":id",
            path:"detailed", // cambio de path para testear
            name: "Detailed-Routine",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import(
                /* webpackChunkName: "home" */ "@/views/DetailedRoutine.vue"
              ),
          },
          {
            path: "create",
            name: "Create-Routine",
            meta: { requiresAuth: false },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import(
                /* webpackChunkName: "home" */ "@/views/RoutineCreate.vue"
              ),
          },
        ],
      },
      {
        path: "settings",
        name: "Settings",
        meta: { requiresAuth: true },

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Settings.vue"),
      },
      {
        path: "/:notFound",
        name: "PathNotFound",
        meta: { requiresAuth: false },

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/PageNotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

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

export default router;
