<template>
  <div class="header">
    <div class="tab-header" v-show="headerType === 'tab'">
      <div class="title" @click="fullscreen()">{{ pageTitle }}</div>
      <div class="menu">
        <img src="/src/assets/indexico/search.svg" alt="搜索" />
        <more-button />
      </div>
    </div>
    <div class="page-header" v-show="headerType === 'page'">
      <img src="/src/assets/arrow.svg" alt="左箭头" @click.stop="goBack()" />
      <div class="title">{{ pageTitle }}</div>
    </div>
    <div class="empty-header" v-show="headerType === 'empty'"></div>
  </div>

  <div class="main" :class="headerType">
    <router-view />
  </div>

  <div class="footer" v-show="headerType !== 'page'">
    <bottom-nav />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import BottomNav from '@/components/BottomNav/index.vue'
import MoreButton from '@/components/MoreButton/index.vue'

const router = useRouter()
const route = useRoute()

let pageTitle = ref()
let index = ref()
let headerType = ref()

watch(
  route,
  (n, o) => {
    pageTitle.value = n.meta.title
    index.value = n.path
    headerType.value = n.meta.headerType
  },
  { immediate: true }
)

const goBack = () => {
  router.go(-1)
}

const fullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}
</script>

<style lang="less" scoped>
@header_height: 90rem;
@tabbar_height: 120rem;
.header {
  width: 100vw;

  & > div {
  }

  .tab-header {
    background-color: #efefef;
    height: @header_height;
    display: flex;
    align-items: center;

    .title {
      margin: 0 auto;
      font-size: 32rem;
      font-weight: 500;
    }
    .menu {
      width: 140rem;
      position: absolute;
      right: 30rem;
      display: flex;
      justify-content: space-between;

      & > img {
        width: 50rem;
        height: 50rem;
      }
    }
  }

  .page-header {
    background-color: #efefef;
    & > img {
      width: 35rem;
      height: 35rem;
      transform: rotate(180deg);
      position: absolute;
      left: 30rem;
    }

    height: @header_height;
    display: flex;
    align-items: center;

    .title {
      margin: 0 auto;
      font-size: 32rem;
      font-weight: 500;
    }
  }

  .empty-header {
    background-color: #ffffff;
  }
}

.main {
  background-color: #efefef;
  overflow: auto;

  &.tab {
    height: calc(~'100vh - @{header_height} - @{tabbar_height}');
  }
  &.page {
    height: calc(~'100vh - @{header_height}');
  }
  &.empty {
    height: calc(~'100vh - @{tabbar_height}');
  }
}

.footer {
  width: 100vw;
  height: @tabbar_height;
  box-sizing: border-box;
  border-top: #d8d8d8 solid 1rem;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
