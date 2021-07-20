<template>
  <div class="find">
    <list-item v-for="item in itemList" :title="item.title" :img="item.imgUrl" arrow />
    <!-- <div class="item" v-for="item in itemList" :key="item.title">
      <div class="left">
        <img src="" alt="" />
        <h5>{{ item.title }}</h5>
      </div>
      <div class="right">
        <img src="" alt="" />
        <i>></i>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

import ListItem from '@/components/ListItem/index.vue'

const itemList = ref([
  {
    title: '朋友圈',
    imgUrl: '/src/assets/contact/friend.png'
  },
  {
    title: '视频号',
    imgUrl: '/src/assets/contact/friend.png'
  },
  {
    title: '扫一扫',
    imgUrl: '/src/assets/contact/friend.png'
  },
  {
    title: '摇是一摇',
    imgUrl: '/src/assets/contact/friend.png'
  }
])
</script>

<style lang="less" scoped>
.find {
}
</style>
