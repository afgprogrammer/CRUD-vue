import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/register',
    name: "Register",
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
