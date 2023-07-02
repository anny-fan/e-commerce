import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'

export default new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, meta: { show: true } },
    { path: '/home', name: 'home', component: Home, meta: { show: true } },
    { path: '/catalog', name: 'catalog', component: Catalog, meta: { show: true } },
    { path: '/cart', name: 'cart', component: Catalog, meta: { show: true } },
    { path: '/login', name: 'login', component: Login, meta: { show: false } },
    { path: '/signup', name: 'signup', component: SignUp, meta: { show: false } },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { show: false }
    },
    { path: '/:pathMatch(.*)', name: 'not-found', component: NotFound, meta: { show: false } }
  ]
})
