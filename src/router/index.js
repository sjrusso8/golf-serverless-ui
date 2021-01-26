import { createRouter, createWebHistory } from 'vue-router'
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
        path: "round-details",
        component: () => import("@/views/Rounds/RoundDetails.vue"),
        name: "Round Details",
        meta: { title: "Round Details", icon: "round", affix: true }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
