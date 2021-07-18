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

  <div class="pay item">
    <div class="left">
      <img src="" alt="" />
      <h5>支付</h5>
    </div>
    <div class="right">
      <i>></i>
    </div>
  </div>

  <div class="menu-block">
    <div class="menu-item">
      <div class="left">
        <img src="" alt="" />
      </div>
      <div class="right">
        <h5>收藏</h5>
        <i>></i>
      </div>
    </div>
    <div class="menu-item">
      <div class="left">
        <img src="" alt="" />
      </div>
      <div class="right">
        <h5>朋友圈</h5>
        <i>></i>
      </div>
    </div>
    <div class="menu-item">
      <div class="left">
        <img src="" alt="" />
      </div>
      <div class="right">
        <h5>卡包</h5>
        <i>></i>
      </div>
    </div>
    <div class="menu-item">
      <div class="left">
        <img src="" alt="" />
      </div>
      <div class="right">
        <h5>标签</h5>
        <i>></i>
      </div>
    </div>
  </div>

  <div class="settings item" @click="to('/setting')">
    <div class="left">
      <img src="" alt="" />
      <h5>设置</h5>
    </div>
    <div class="right">
      <i>></i>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const to = (url) => {
  router.push(url)
}
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

.item {
  width: 100vw;
  height: 45px;
  box-sizing: border-box;
  padding: 0 15px 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin: 10px 0 10px 0;
  border-top: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;

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
    width: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.menu-block {
  .menu-item {
    width: 100vw;
    height: 45px;
    box-sizing: border-box;
    padding: 0 15px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;

    .left {
      width: 30px;
      margin-right: 15px;
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        margin-right: 15px;
      }
    }

    .right {
      width: calc(100vw - 45px);
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: #e8e8e8 solid 0.5px;
    }
  }
}
</style>
