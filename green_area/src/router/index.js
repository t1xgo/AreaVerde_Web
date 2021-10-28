import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navigation from '../components/Navigation.vue'
import Login from '../views/Login&Signup.vue'
import feed from '../views/Feed.vue'
import user from '../views/UserPanel.vue'
import admin from '../views/AdminPanel.vue'
import collector from '../views/CollectorSection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, Navigation
  },
  {
    path: '/feed',
    name: 'Feed',
    component: feed, Navigation
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, Navigation
  },
  {
    path: '/user',
    name: 'User',
    component: user
  },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: admin
  },
  {
    path: '/collector',
    name: 'CollectorSection',
    component: collector
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
