<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ListItem from '@/components/ListItem/index.vue'

defineOptions({
    name: 'Home'
})

const router = useRouter()
</script>

<template>
    <div class="">
        <list-item
            v-for="item in 30"
            :title="'好友' + item"
            :sub="'你好啊我的朋友，今天是星期五，你准备周末干什么呢？'"
            :img="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
            :time="'9月1日'"
            @click="router.push('/chat')"
        />
    </div>
</template>
