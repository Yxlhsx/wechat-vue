<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface BottomNavInfo {
    name: string
    icon: string
    path: string
}

const navList = ref<BottomNavInfo[]>([
    {
        name: '微信',
        icon: '../../assets/tabbar/home.svg',
        path: ''
    },
    {
        name: '通讯录',
        icon: '../../assets/tabbar/contact.svg',
        path: ''
    },
    {
        name: '发现',
        icon: '../../assets/tabbar/find.svg',
        path: ''
    },
    {
        name: '我',
        icon: '../../assets/tabbar/mine.svg',
        path: ''
    }
])
function iconSrc(src: string) {
    return new URL(src, import.meta.url).href
}

const activeIndex = ref(0)

const router = useRouter()
function switchNav(index: number) {
    router.push(navList.value[index])

    activeIndex.value = index
}
</script>

<template>
    <ul class="flex justify-around items-center py-2 h-16 bg-[#f7f7f7]">
        <li v-for="(item, index) in navList" @click="switchNav(index)">
            <img :src="iconSrc(item.icon)" :alt="item.name" />
            <div
                class="text-sm"
                :class="index == activeIndex ? 'text-bottom-nav-active' : 'text-bottom-nav'"
            >
                {{ item.name }}
            </div>
        </li>
    </ul>
</template>
