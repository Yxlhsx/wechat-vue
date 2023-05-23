<script setup lang="ts">
import { useRouter } from 'vue-router'

defineOptions({
    name: 'AppBar'
})

const props = defineProps<{
    title: string
}>()

const router = useRouter()

const handleFullscreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        document.documentElement.requestFullscreen()
    }
}
</script>

<template>
    <div class="flex justify-between items-center h-12 bg-[#ededed]">
        <div class="w-24" @click="router.go(-1)"></div>
        <div class="text-lg font-medium" @click="handleFullscreen">{{ props.title }}</div>
        <div class="w-24"></div>
    </div>
</template>
