<template>
  <div class="find">
    <div class="item" v-for="item in itemList" :key="item.title">
      <div class="left">
        <img src="" alt="" />
        <h5>{{ item.title }}</h5>
      </div>
      <div class="right">
        <img src="" alt="" />
        <i>></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const itemList = reactive([
  {
    title: '朋友圈'
  },
  {
    title: '视频号'
  },
  {
    title: '扫一扫'
  },
  {
    title: '摇是一摇'
  }
])
</script>

<style lang="less">
.find {
  .item {
    width: 100vw;
    height: 45px;
    box-sizing: border-box;
    padding: 0 15px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;

    .left {
      width: 40%;
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        margin-right: 15px;
      }
    }

    .right {
      width: 15%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
