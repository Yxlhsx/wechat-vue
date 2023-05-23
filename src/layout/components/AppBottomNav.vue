<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export interface BottomNavInfo {
    name: string
    icon: string
    path: string
}

defineOptions({
    name: 'AppBottomNav'
})

const props = defineProps<{
    navList: BottomNavInfo[]
}>()

const router = useRouter()
const route = useRoute()

const activeIndex = ref(0)
onMounted(() => {
    nextTick(() => {
        activeIndex.value = props.navList.findIndex(i => i.path == route.path) || 0
    })
})

function switchNav(index: number) {
    router.push(props.navList[index].path)

    activeIndex.value = index
}
</script>

<template>
    <ul class="flex justify-around items-center py-2 h-16 bg-[#f7f7f7]">
        <li
            v-for="(item, index) in props.navList"
            class="flex flex-col justify-center items-center w-full"
            @click="switchNav(index)"
        >
            <img
                class="w-7"
                :src="`/src/assets/tabbar/${item.icon}${activeIndex == index ? '-active' : ''}.svg`"
                :alt="item.name"
            />
            <div
                class="text-sm"
                :class="index == activeIndex ? 'text-bottom-nav-active' : 'text-bottom-nav'"
            >
                {{ item.name }}
            </div>
        </li>
    </ul>
</template>
