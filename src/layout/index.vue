<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppBar from './components/AppBar.vue'
import AppMain from './components/AppMain.vue'
import AppBottomNav, { BottomNavInfo } from './components/AppBottomNav.vue'

defineOptions({
    name: 'Layout'
})

const route = useRoute()

const navList = ref<BottomNavInfo[]>([
    {
        name: '微信',
        icon: 'home',
        path: '/home'
    },
    {
        name: '通讯录',
        icon: 'contact',
        path: '/contact'
    },
    {
        name: '发现',
        icon: 'find',
        path: '/find'
    },
    {
        name: '我',
        icon: 'mine',
        path: '/mine'
    }
])

const hasTabrPage = computed(() => navList.value.map(i => i.path).includes(route.path))
</script>

<template>
    <app-bar :title="route.meta['title']" />

    <app-main />

    <app-bottom-nav v-show="hasTabrPage" :nav-list="navList" />
</template>
