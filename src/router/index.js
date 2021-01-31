import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../views/Login.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Logout.vue")
  },
  {
    path: "/",
    redirect: { name: 'Dashboard' },
    component: DefaultLayout,
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard", affix: true }
      },
      {
        path: "profile",
        component: () => import("@/views/Profile/Profile.vue"),
        name: "Profile",
        meta: { title: "Profile", icon: "profile", affix: true }
      },
      {
        path: "courses",
        component: () => import("@/views/Course/Courses.vue"),
        name: "Courses",
        meta: { title: "Courses", icon: "course", affix: true }
      },
      {
        path: "course-details/:id/:name_url/:city_url",
        component: () => import("@/views/Course/CourseDetails.vue"),
        name: "Course Details",
        props: true,
        meta: { title: "Course Details", icon: "course", affix: true}
      },
      {
        path: "practice",
        component: () => import("@/views/Practice/Practice.vue"),
        name: "Practice",
        meta: { title: "Practice", icon: "practice", affix: true }
      },
      {
        path: "rounds",
        component: () => import("@/views/Rounds/Rounds.vue"),
        name: "Rounds",
        meta: { title: "Rounds", icon: "round", affix: true }
      },
      {
        path: "round-details/:id",
        component: () => import("@/views/Rounds/RoundDetails.vue"),
        name: "Round Details",
        meta: { title: "Round Details", icon: "round", affix: true }
      },
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import("@/views/Error.vue") },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/logout'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = JSON.parse(localStorage.getItem('vuex')).auth.accessToken;

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
