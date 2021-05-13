import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/Layout.vue'
import Home from '@/views/home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '微信'
        },
        component: Home
      },
      {
        path: '/contact',
        name: 'Contact',
        meta: {
          title: '通讯录'
        },
        component: () => import('@/views/contact/Contact.vue')
      }
    ]
  }
  // {
  // 	path: '/vuex',
  // 	name: 'Vuex',
  // 	component: Vuex
  // },
  // {
  // 	path: '/axios',
  // 	name: 'Axios',
  // 	component: () => import('@/views/axios.vue') // 懒加载组件
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
