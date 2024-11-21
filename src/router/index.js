import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component:  HomeView,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('../views/Menu.vue'),
    },
    {
      path: '/tables',
      name: 'Tables',
      component: () => import('../views/Tables.vue'),
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('../views/Order.vue'),
    },
  ],
})

export default router
