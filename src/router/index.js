import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "@/views/Login";
import DefaultLayout from "@/layouts/DefaultLayout";

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
      import(/* webpackChunkName: "logout" */ "@/views/Logout")
  },
  {
    path: "/",
    redirect: { name: 'Dashboard' },
    component: DefaultLayout,
    children: [
      {
        path: "dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */"@/views/Dashboard"),
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard", affix: true }
      },
      {
        path: "profile",
        component: () => import(/* webpackChunkName: "profile" */"@/views/Profile/Profile"),
        name: "Profile",
        meta: { title: "Profile", icon: "profile", affix: true }
      },
      {
        path: "courses",
        component: () => import(/* webpackChunkName: "course" */"@/views/Course/Courses"),
        name: "Courses",
        meta: { title: "Courses", icon: "course", affix: true }
      },
      {
        path: "course-details/:id/:name_url/:city_url",
        component: () => import(/* webpackChunkName: "coursedetails" */"@/views/Course/CourseDetails"),
        name: "Course Details",
        props: true,
        meta: { title: "Course Details", icon: "course", affix: true}
      },
      {
        path: "practice",
        component: () => import(/* webpackChunkName: "practice" */"@/views/Practice/Practice"),
        name: "Practice",
        meta: { title: "Practice", icon: "practice", affix: true }
      },
      {
        path: "rounds",
        component: () => import(/* webpackChunkName: "rounds" */"@/views/Rounds/Rounds"),
        name: "Rounds",
        meta: { title: "Rounds", icon: "round", affix: true }
      },
      {
        path: "round-details/:id",
        component: () => import(/* webpackChunkName: "rounddetails" */"@/views/Rounds/RoundDetails"),
        name: "Round Details",
        meta: { title: "Round Details", icon: "round", affix: true }
      },
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import("@/views/Error") },
]

const router = createRouter({
  history: createWebHashHistory(),
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
