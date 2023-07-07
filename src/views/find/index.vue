<template>
    <div class="find">
        <list-item
            v-for="item in itemList"
            :title="item.title"
            :img="item.imgUrl"
            mini
            @click="router.push(item.path)"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ListItem from '@/components/ListItem/index.vue'
import friend from '@/assets/contact/friend.png'

const router = useRouter()

const itemList = ref([
    {
        title: '朋友圈',
        imgUrl: friend,
        path: '/moment'
    },
    {
        title: '视频号',
        imgUrl: friend,
        path: '/moment'
    },
    {
        title: '扫一扫',
        imgUrl: friend,
        path: '/moment'
    },
    {
        title: '摇一摇',
        imgUrl: friend,
        path: '/moment'
    }
])
</script>
