import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue'),
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import('../views/Tables.vue'),
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Order.vue'),
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }, // Allow login page to be accessed without authentication
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { requiresAuth: false }, // Allow signup page to be accessed without authentication
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Navigation Guard to Protect Routes that Require Authentication
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('jwtToken')
//   if (to.meta.requiresAuth && !token) {
//     // Redirect to login if the route requires authentication and no token is found
//     next('/login')
//   } else if (to.name === 'Login' && token) {
//     // If already logged in, redirect to Home or another authenticated page
//     next('/')
//   } else {
//     next()
//   }
// })

export default router
