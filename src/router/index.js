import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/Layout.vue'
import Home from '@/views/home/Home.vue'
import Find from '@/views/find/Find.vue'
import Mine from '@/views/mine/Mine.vue'

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
          title: '微信',
          headerType: 'tab'
        },
        component: Home
      },
      {
        path: '/contact',
        name: 'Contact',
        meta: {
          title: '通讯录',
          headerType: 'tab'
        },
        component: () => import('@/views/contact/Contact.vue')
      },
      {
        path: '/find',
        name: 'Find',
        meta: {
          title: '发现',
          headerType: 'tab'
        },
        component: Find
      },
      {
        path: '/mine',
        name: 'Mine',
        meta: {
          title: '我',
          headerType: 'empty'
        },
        component: Mine
      },
      {
        path: '/setting',
        name: 'Setting',
        meta: {
          title: '设置',
          headerType: 'page'
        },
        component: () => import('@/views/setting/Index.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // 此处需特别注意置于最底部
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
