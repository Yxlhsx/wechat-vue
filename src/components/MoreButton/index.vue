<template>
  <img class="more" src="/src/assets/indexico/more.svg" alt="更多" @click.stop="onShow()" />
  <div class="popover" v-show="show">
    <div class="popper-arrow"></div>
    <div class="menu-list">
      <div class="menu-item" v-for="item in menuList">
        <img :src="item.ico" :alt="item.title" />
        <div class="title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>

  <div class="click-block" v-show="show" @click="show = false"></div>
</template>

<script setup>
import { ref } from 'vue'

import more from '@/assets/indexico/more.svg'

const menuList = ref([
  { title: '发起群聊', ico: more },
  { title: '添加朋友', ico: more },
  { title: '扫一扫', ico: more },
  { title: '收付款', ico: more },
  { title: '帮助与反馈', ico: more }
])
const show = ref(false)

const onShow = () => {
  show.value = true
}
</script>

<style lang="less" scoped>
img.more {
  position: relative;
  width: 50rem;
  height: 50rem;
}

.popover {
  width: 300rem;
  height: 500rem;
  border-radius: 15rem;
  position: absolute;
  top: 80rem;
  right: -15rem;
  z-index: 2;
  background-color: #4c4c4c;

  .popper-arrow {
    position: absolute;
    top: -20rem;
    right: 15rem;

    border-left: 25rem solid transparent;
    border-right: 25rem solid transparent;
    border-bottom: 30rem solid #4c4c4c;
  }

  .menu-list {
    height: 100%;
    .menu-item {
      height: 20%;
      color: #fefefe;
      display: flex;
      align-items: center;

      img {
        width: 60rem;
        height: 60rem;
        margin: 0 20rem 0 25rem;
      }
      .title {
        width: 195rem;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 30rem;
      }
    }
    & .menu-item:not(:last-child) {
      .title {
        border-bottom: #e8e8e83b solid 1rem;
      }
    }
  }
}

.click-block {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}
</style>
