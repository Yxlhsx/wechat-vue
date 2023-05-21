<script lang="ts" setup>
import AppBar from './components/AppBar.vue'
import AppBottomNav from './components/AppBottomNav.vue'

const fullscreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        document.documentElement.requestFullscreen()
    }
}
</script>

<template>
    <app-bar @click="fullscreen" />

    <div style="height: calc(100vh - 7rem)" class="overflow-y-auto h-80">
        <router-view />
    </div>

    <app-bottom-nav />
</template>
