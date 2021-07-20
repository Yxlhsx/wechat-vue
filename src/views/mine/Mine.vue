<template>
  <div class="top">
    <div class="user">
      <div class="avatar">
        <img
          src="https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLA8dh3ZzGkZFJqyRazDEicdt7BTTrGwZXR43Kx5icE6GxRkTaAMbx8w4OZw9dB8WibpK0QeicMYibySvNA/132"
          alt="用户头像"
        />
      </div>
      <div class="info">
        <p>想望着太阳</p>
        <div class="wechat-code">
          <p>微信号：Yxlhsx01</p>
          <img src="/src/assets/arrow.svg" alt="右箭头" />
        </div>
      </div>
    </div>
    <div class="status">
      <div class="btn">+状态</div>
    </div>
  </div>

  <div class="alone">
    <list-item title="支付" img="item.imgUrl" arrow />
  </div>

  <div class="menu-group">
    <list-item v-for="item in menuList" :title="item.title" :img="item.imgUrl" arrow />
  </div>

  <div class="alone" @click="to('/setting')">
    <list-item title="设置" img="item.imgUrl" arrow />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import ListItem from '@/components/ListItem/index.vue'

const router = useRouter()

const to = (url) => {
  router.push(url)
}

const menuList = ref([
  {
    title: '收藏',
    imgUrl: 'asd'
  },
  {
    title: '朋友圈',
    imgUrl: 'asd'
  },
  {
    title: '卡包',
    imgUrl: 'asd'
  },
  {
    title: '标签',
    imgUrl: 'asd'
  }
])
</script>

<style lang="less" scoped>
.top {
  box-sizing: border-box;
  padding-top: 50rem;
  padding-bottom: 10rem;
  background-color: #ffffff;
  border-bottom: solid 1rem #dbdbdb;

  .user {
    display: flex;

    .avatar {
      width: 200rem;
      display: flex;
      justify-content: center;
      img {
        width: 120rem;
        height: 120rem;
        border-radius: 12rem;
        margin-left: 10rem;
      }
    }

    .info {
      width: 550rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > p {
        font-size: 40rem;
        font-weight: 500;
        color: #1f1f1f;
      }

      .wechat-code {
        font-size: 26rem;
        color: #7d7d7d;
        padding-right: 30rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  .status {
    height: 120rem;
    margin-left: 200rem;
    display: flex;
    align-items: center;

    .btn {
      width: 100rem;
      height: 40rem;
      border: solid 2rem #8b8b8b;
      border-radius: 25rem;
      text-align: center;
      line-height: 40rem;
      color: #8b8b8b;
      font-size: 28rem;
    }
  }
}

.alone {
  margin: 20rem 0 20rem;
  border-top: solid 1rem #e6e6e6;
  border-bottom: solid 1rem #e6e6e6;
}

.menu-group {
  border-top: solid 1rem #e6e6e6;
  border-bottom: solid 1rem #e6e6e6;
}
</style>
