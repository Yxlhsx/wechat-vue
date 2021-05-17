<template>
  <div class="header" @click="fullscreen()">
    <div class="title">{{ pageTitle }}</div>
    <div class="menu">
      <div></div>
      <div></div>
    </div>
  </div>

  <div class="main">
    <router-view />
  </div>

  <div class="footer">
    <router-link to="/home" class="nav-item" :class="{ selected: index === '/home' }">
      <div class="item-ico"></div>
      <span>微信</span>
    </router-link>
    <router-link to="/contact" class="nav-item" :class="{ selected: index === '/contact' }">
      <div class="item-ico"></div>
      <span>通讯录</span>
    </router-link>
    <router-link to="/find" class="nav-item" :class="{ selected: index === '/find' }">
      <div class="item-ico"></div>
      <span>发现</span>
    </router-link>
    <router-link to="/mine" class="nav-item" :class="{ selected: index === '/mine' }">
      <div class="item-ico"></div>
      <span>我</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

let pageTitle = ref()
let index = ref()

watch(
  route,
  (n, o) => {
    pageTitle.value = n.meta.title
    index.value = n.path
  },
  { immediate: true }
)

const fullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100vw;
  height: 50px;
  background-color: #efefef;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;

  .title {
    margin: 0 auto;
    font-weight: 600;
  }

  .menu {
    width: 70px;
    position: absolute;
    right: 10px;
    display: flex;
    justify-content: space-between;

    & > div {
      width: 30px;
      height: 30px;
      background-color: #010101;
    }
  }
}

.main {
  margin: 50px 0 70px 0;
}

.footer {
  width: 100vw;
  height: 70px;
  box-sizing: border-box;
  border-top: #d8d8d8 solid 0.5px;
  background-color: #f7f7f7;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .nav-item {
    width: 22%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-decoration: none;

    .item-ico {
      width: 30px;
      height: 30px;
      background-color: #010101;
    }
    span {
      color: #010101;
    }
  }

  .router-link-active {
    color: #f7f7f7;
  }
  // .selected {
  //   .item-ico {
  //     background-color: #10bb61;
  //   }
  //   span {
  //     color: #10bb61;
  //   }
  // }
}
</style>
