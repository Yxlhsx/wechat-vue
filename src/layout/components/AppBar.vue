<script setup lang="ts">
import { useRouter } from 'vue-router'

defineOptions({
    name: 'AppBar'
})

const props = defineProps<{
    title: string
    back: boolean
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
        <div class="flex justify-start items-center w-24">
            <img
                v-show="props.back"
                class="m-5 w-2 rotate-180"
                src="@/assets/arrow.svg"
                alt="返回"
                @click="router.go(-1)"
            />
        </div>
        <div class="text-lg font-medium" @click="handleFullscreen">{{ props.title }}</div>
        <div class="w-24"></div>
    </div>
</template>
