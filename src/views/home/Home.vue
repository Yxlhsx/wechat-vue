<template>
  <div class="main-list">
    <list-item
      v-for="(item, index) in 100"
      :title="'工具人' + item"
      :sub="'我给你发了消息你怎么不回我'"
      :img="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
      :time="'12月12日'"
      @tap="toChat(`工具人${index}`)"
      size="big"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import ListItem from '@/components/ListItem/index.vue'

const router = useRouter()

function toChat(contactName) {
  router.push({
    name: 'Chat',
    params: {
      contactName
    }
  })
}
</script>

<style lang="less" scoped>
@item-height: 140rem;

.main-list {
  height: 500px;
}
</style>
