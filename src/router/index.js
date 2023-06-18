import { createRouter, createWebHistory } from 'vue-router'
import MasterView from '../views/MasterView.vue'
import AboutView from '../views/AboutView.vue'
import ChefView from '../views/ChefView.vue'
import ReservationView from '../views/ReservationView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MasterView
  },
  {
    path: '/abouts',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/chefs',
    name: 'ChefView',
    component: ChefView
  },
  {
    path: '/reservations',
    name: 'ReservationView',
    component: ReservationView
  },
  {
    path: '/contacts',
    name: 'ContactView',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
