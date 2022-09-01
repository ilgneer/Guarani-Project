import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/Home'
import AboutPage from '../pages/About'
import ContactPage from '../pages/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/About',
    component: AboutPage
  },
  {
    path: '/Contato',
    component: ContactPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
