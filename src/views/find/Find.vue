<template>
  <div class="find">
    <list-item v-for="item in itemList" :title="item.title" :img="item.imgUrl" arrow />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import ListItem from '@/components/ListItem/index.vue'

import friend from '@/assets/contact/friend.png'

const itemList = ref([
  {
    title: '朋友圈',
    imgUrl: friend
  },
  {
    title: '视频号',
    imgUrl: friend
  },
  {
    title: '扫一扫',
    imgUrl: friend
  },
  {
    title: '摇是一摇',
    imgUrl: friend
  }
])
</script>

<style lang="less" scoped>
.find {
}
</style>
