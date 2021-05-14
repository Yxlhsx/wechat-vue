<template>
  <div class="conversation-item" v-for="item in 100" :key="item">
    <div class="avatar">
      <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="头像" />
    </div>
    <div class="info">
      <div class="title">工具人{{ item }}号</div>
      <div class="msg">啊收到了哈岁的拉黑</div>
    </div>
  </div>
</template>

<script setup>
const num = 10
</script>

<style lang="less" scoped>
.conversation-item {
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;

  .avatar {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
  }

  .info {
    width: calc(100vw - 80px);
    height: 80px;
    border-bottom: #e8e8e8 solid 0.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 16px;
      font-weight: 600;
    }

    .msg {
      font-size: 13px;
      color: #bababa;
    }
  }
}
</style>
