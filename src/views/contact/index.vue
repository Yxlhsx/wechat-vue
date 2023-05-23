<script lang="ts" setup>
import { ref } from 'vue'
import ListItem from '@/components/ListItem/index.vue'

const menuList = ref([
    { title: '新的朋友', imgUrl: '/src/assets/contact/friend.png' },
    { title: '群聊', imgUrl: '/src/assets/contact/addgroup.png' },
    { title: '标签', imgUrl: '/src/assets/contact/tag.png' },
    { title: '公众号', imgUrl: '/src/assets/contact/offical.png' }
])
</script>

<template>
    <div>
        <div>
            <list-item v-for="item in menuList" :title="item.title" :img="item.imgUrl" mini />
        </div>

        <div v-for="item in 24">
            <p class="p-1 text-xs bg-[#ededed]">{{ item }}</p>
            <div>
                <list-item
                    v-for="(_item, index) in 5"
                    :title="'工具人' + index"
                    :img="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
                    mini
                />
            </div>
        </div>
    </div>
</template>
