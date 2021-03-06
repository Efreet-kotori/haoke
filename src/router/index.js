import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由页面懒加载
const routes = [
  { path: '/login', component: () => import('@/views/login') },
  {
    path: '/',
    component: () => {
      return import('@/views/Layout')
    },
    redirect: '/ ',
    children: [
      { path: '/ ', component: () => import('@/views/Home') },
      { path: '/house', component: () => import('@/views/House') },
      { path: '/qa', component: () => import('@/views/QA') },
      { path: '/profile', component: () => import('@/views/My') }
    ]
  },
  { path: '/city', component: () => import('@/views/Home/city') },
  { path: '/collection', component: () => import('@/views/Collection') }
]

const router = new VueRouter({
  routes
})

export default router
