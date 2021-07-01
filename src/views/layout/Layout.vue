<template>
  <div class="header" @click="fullscreen()">
    <div class="common-header" v-show="!hideHeader">
      <div class="title">{{ pageTitle }}</div>
      <div class="menu">
        <img src="/src/assets/search.svg" alt="搜索" />
        <img src="/src/assets/more.svg" alt="更多" />
      </div>
    </div>
  </div>

  <div class="main">
    <router-view />
  </div>

  <div class="footer">
    <router-link to="/home" class="nav-item">
      <img class="item-ico" :src="isActive('/home')" alt="" />
      <span>微信</span>
    </router-link>
    <router-link to="/contact" class="nav-item">
      <img class="item-ico" :src="isActive('/contact')" alt="" />
      <span>通讯录</span>
    </router-link>
    <router-link to="/find" class="nav-item">
      <img class="item-ico" :src="isActive('/find')" alt="" />
      <span>发现</span>
    </router-link>
    <router-link to="/mine" class="nav-item">
      <img class="item-ico" :src="isActive('/mine')" alt="" />
      <span>我</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { routerKey, useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

let pageTitle = ref()
let index = ref()
let hideHeader = ref(false)

watch(
  route,
  (n, o) => {
    pageTitle.value = n.meta.title
    index.value = n.path
    hideHeader.value = n.meta.hideHeader
  },
  { immediate: true }
)

const isActive = (url) => {
  const icoName = index.value === url ? `${url}-active` : url
  return `/src/assets${icoName}.svg`
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
.header {
  width: 100vw;
  height: 50px;
  background-color: #ffffff;

  .common-header {
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #efefef;

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

      & > img {
        width: 25px;
        height: 25px;
      }
    }
  }
}

.main {
  height: calc(100vh - 50px - 70px);
  background-color: #efefef;
  overflow: auto;
}

.footer {
  width: 100vw;
  height: 70px;
  box-sizing: border-box;
  border-top: #d8d8d8 solid 0.5px;
  background-color: #f7f7f7;
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
      width: 25px;
      height: 25px;
    }
    span {
      color: #010101;
    }
  }

  .router-link-active {
    color: #f7f7f7;
  }
}
</style>
