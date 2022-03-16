<template>
  <div class="main-list">
    <list-item
      v-for="(item, index) in 100"
      :title="'工具人' + item"
      :sub="'我给你发了消息你怎么不回我'"
      :img="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
      :time="'12月12日'"
      :to="toChat"
      size="big"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import ListItem from '@/components/ListItem/index.vue'

import Toast from '@/components/Toast/toast'

const router = useRouter()

function toChat() {
  router.push('/chat')
}

// setTimeout(() => {
//   Toast({
//     msg: '消息',
//     type: 'zzz',
//     duration: 3000
//   })
// }, 1500)
</script>

<style lang="less" scoped>
@item-height: 140rem;

.main-list {
  height: 500px;
  // .conversation-item {
  //   width: 100vw;
  //   height: @item-height;
  //   display: flex;
  //   align-items: center;
  //   background-color: #ffffff;
  //   content-visibility: auto;

  //   .avatar {
  //     width: @item-height;
  //     height: @item-height;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;

  //     img {
  //       width: @item-height * 0.7;
  //       height: @item-height * 0.7;
  //       border-radius: 20rem;
  //     }
  //   }

  //   .info {
  //     width: calc(~'100vw - @{item-height}');
  //     height: @item-height;
  //     box-sizing: border-box;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;

  //     .title {
  //       font-size: 32rem;
  //       font-weight: 400;
  //     }

  //     .msg {
  //       font-size: 24rem;
  //       color: #bababa;
  //     }
  //   }
  // }

  // & .conversation-item:not(:last-child) {
  //   .info {
  //     border-bottom: #e8e8e8 solid 1rem;
  //   }
  // }
}
</style>
