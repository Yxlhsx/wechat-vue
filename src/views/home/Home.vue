<template>
  <div class="main-list">
    <div class="conversation-item" v-for="item in num" :key="item">
      <div class="avatar">
        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="头像" />
      </div>
      <div class="info">
        <div class="title">工具人{{ item }}号</div>
        <div class="msg">啊收到了哈岁的拉黑</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Toast from '@/components/Toast/toast'

// Toast({
//   msg: '消息',
//   type: 'zzz'
// })
const num = 2
</script>

<style lang="less" scoped>
@item-height: 140rem;

.main-list {
  .conversation-item {
    width: 100vw;
    height: @item-height;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    content-visibility: auto;

    .avatar {
      width: @item-height;
      height: @item-height;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: @item-height * 0.7;
        height: @item-height * 0.7;
        border-radius: 20rem;
      }
    }

    .info {
      width: calc(~'100vw - @{item-height}');
      height: @item-height;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-size: 32rem;
        font-weight: 400;
      }

      .msg {
        font-size: 24rem;
        color: #bababa;
      }
    }
  }

  & .conversation-item:not(:last-child) {
    .info {
      border-bottom: #e8e8e8 solid 1rem;
    }
  }
}
</style>
