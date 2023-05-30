import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/index.vue'
import Contact from '@/views/contact/index.vue'
import Find from '@/views/find/index.vue'
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
                component: Contact
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
                path: '/chat',
                name: 'Chat',
                meta: {
                    title: '聊天',
                    headerType: 'page'
                },
                component: () => import('@/views/chat/index.vue')
            },
            {
                path: '/chat_info',
                name: 'ChatInfo',
                meta: {
                    title: '聊天信息',
                    headerType: 'empty'
                },
                component: () => import('@/views/chat/ChatInfo.vue')
            },
            {
                path: '/setting',
                name: 'Setting',
                meta: {
                    title: '设置',
                    headerType: 'page'
                },
                component: () => import('@/views/setting/Index.vue')
            },
            {
                path: '/circle_friends',
                name: 'CircleFriends',
                meta: {
                    title: '朋友圈',
                    headerType: 'page'
                },
                component: () => import('@/views/circle-friends/CircleFriends.vue')
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*', // 此处需特别注意置于最底部
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
