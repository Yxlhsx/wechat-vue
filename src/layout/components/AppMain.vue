<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
    hasBottom: boolean
}>()

const appMainHeight = ref('calc(100vh - 7rem)')
watch(
    () => props.hasBottom,
    v => {
        appMainHeight.value = v ? 'calc(100vh - 7rem)' : 'calc(100vh - 3rem)'
    },
    { immediate: true }
)
</script>

<template>
    <div class="overflow-y-auto h-80">
        <router-view />
    </div>
</template>

<style scoped>
div {
    height: v-bind(appMainHeight);
}
</style>
