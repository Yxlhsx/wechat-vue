<template>
  <div class="contact">
    <div>
      <list-item v-for="item in menuList" :title="item.title" :img="item.imgUrl" />
    </div>

    <div class="contact-block" v-for="item in 24" :key="item">
      <span class="contact-head">{{ item }}</span>
      <div>
        <list-item
          v-for="(item, index) in 5"
          :title="'工具人' + index"
          :img="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import ListItem from '@/components/ListItem/index.vue'

import friend from '@/assets/contact/friend.png'
import addgroup from '@/assets/contact/addgroup.png'
import tag from '@/assets/contact/tag.png'
import offical from '@/assets/contact/offical.png'

const menuList = ref([
  { title: '新的朋友', imgUrl: friend },
  { title: '群聊', imgUrl: addgroup },
  { title: '标签', imgUrl: tag },
  { title: '公众号', imgUrl: offical }
])
</script>

<style lang="less" scoped>
@item-heigh: 110rem;

.contact {
  .contact-block {
    .contact-head {
      display: inline-block;
      height: 70rem;
      font-size: 24rem;
      line-height: 70rem;
      text-indent: 30rem;
      color: #5d5d5d;
    }
  }
}
</style>
