<template>
  <div class="header">
    <div class="title">{{ pageTitle }}</div>
    <div class="menu">菜单</div>
  </div>

  <div class="main">
    <router-view />
  </div>

  <div class="footer">
    <div class="nav-item" @click="to('/home')">
      <div class="item-ico"></div>
      <span>微信</span>
    </div>
    <div class="nav-item" @click="to('/contact')">
      <div class="item-ico"></div>
      <span>通讯录</span>
    </div>
    <div class="nav-item">
      <div class="item-ico"></div>
      <span>发现</span>
    </div>
    <div class="nav-item">
      <div class="item-ico"></div>
      <span>我</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

let pageTitle = ref()

watch(
  route,
  (n, o) => {
    pageTitle.value = n.meta.title
  },
  { immediate: true }
)

const to = (href) => {
  router.push(href)
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
    position: absolute;
    right: 0;
  }
}

.main {
  margin: 60px 0 70px 0;
}

.footer {
  width: 100vw;
  height: 70px;
  box-sizing: border-box;
  border-top: #d8d8d8 solid 1px;
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

    .item-ico {
      width: 30px;
      height: 30px;
      background-color: #26743d;
    }
  }
}
</style>
