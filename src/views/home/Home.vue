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
  height: @item-height;
  display: flex;
  align-items: center;
  @item-height: 70px;

  .avatar {
    width: @item-height;
    height: @item-height;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: @item-height * 0.7;
      height: @item-height * 0.7;
      border-radius: 10px;
    }
  }

  .info {
    width: calc(100vw - @item-height);
    height: @item-height;
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
