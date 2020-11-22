import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PhotoV from '../views/PhotoV'

const routes = [
  { path: '/',name: 'Home',component: Home },
  { path: '/photo/:id',name: 'About',component: PhotoV }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
