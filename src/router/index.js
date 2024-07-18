import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dates',
      name: 'dates',
      component: () => import('../views/DatesView.vue')
    },
    {
      path: '/releases',
      name: 'releases',
      component: () => import('../views/ReleasesView.vue')
    },
    {
      path: '/merch',
      name: 'merch',
      component: () => import('../views/MerchView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/teste',
      name: 'teste',
      component: () => import('../components/MobileNavigation.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    }
  ]
})

export default router
