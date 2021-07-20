<template>
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
</template>

<script setup>
</script>

<style lang="less" scoped>
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
</style>