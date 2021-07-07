<template>
  <div class="header" @click="fullscreen()">
    <div class="common-header" v-show="!hideHeader">
      <div class="title">{{ pageTitle }}</div>
      <div class="menu">
        <img src="/src/assets/indexico/search.svg" alt="搜索" />
        <img src="/src/assets/indexico/more.svg" alt="更多" />
      </div>
    </div>
  </div>

  <div class="main">
    <router-view />
  </div>

  <div class="footer">
    <router-link to="/home" class="nav-item home">
      <div class="item-ico" />
      <span>微信</span>
    </router-link>
    <router-link to="/contact" class="nav-item contact">
      <div class="item-ico" />
      <span>通讯录</span>
    </router-link>
    <router-link to="/find" class="nav-item find">
      <div class="item-ico" />
      <span>发现</span>
    </router-link>
    <router-link to="/mine" class="nav-item mine">
      <div class="item-ico" />
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
@header_height: 90rem;
@tabbar_height: 120rem;
.header {
  width: 100vw;

  .common-header {
    width: 100vw;
    height: @header_height;
    display: flex;
    align-items: center;
    background-color: #efefef;

    .title {
      margin: 0 auto;
      font-size: 32rem;
      font-weight: 600;
    }

    .menu {
      width: 140rem;
      position: absolute;
      right: 20rem;
      display: flex;
      justify-content: space-between;

      & > img {
        width: 50rem;
        height: 50rem;
      }
    }
  }
}

.main {
  height: calc(~'100vh - @{header_height} - @{tabbar_height}');
  background-color: #efefef;
  overflow: auto;
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

  .nav-item {
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24rem;
    text-decoration: none;

    .item-ico {
      width: 50rem;
      height: 50rem;
      background-size: 100% 100%;
    }

    &.home .item-ico {
      background-image: url('/src/assets/tabbar/home.svg');
    }
    &.contact .item-ico {
      background-image: url('/src/assets/tabbar/contact.svg');
    }
    &.find .item-ico {
      background-image: url('/src/assets/tabbar/find.svg');
    }
    &.mine .item-ico {
      background-image: url('/src/assets/tabbar/mine.svg');
    }

    span {
      color: #010101;
    }
  }

  .router-link-active.nav-item {
    span {
      color: #07c160;
    }
    &.home .item-ico {
      background-image: url('/src/assets/tabbar/home-active.svg');
    }
    &.contact .item-ico {
      background-image: url('/src/assets/tabbar/contact-active.svg');
    }
    &.find .item-ico {
      background-image: url('/src/assets/tabbar/find-active.svg');
    }
    &.mine .item-ico {
      background-image: url('/src/assets/tabbar/mine-active.svg');
    }
  }
}
</style>
