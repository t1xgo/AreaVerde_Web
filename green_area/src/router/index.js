import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navigation from '../components/Navigation.vue'
import Login from '../views/Login&Signup.vue'
import About from '../components/AboutSection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, Navigation
  },
  {
    path: '/about',
    name: 'About',
    component: About, Navigation
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, Navigation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
