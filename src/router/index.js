import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由页面懒加载
const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: () => {
      return import('@/views/login')
    }
  },
  {
    path: '/user',
    component: () => {
      return import('@/views/user')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
