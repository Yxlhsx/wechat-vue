<template>
  <div class="top">
    <div class="user">
      <div class="avatar">
        <img
          src="https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLA8dh3ZzGkZFJqyRazDEicdt7BTTrGwZXR43Kx5icE6GxRkTaAMbx8w4OZw9dB8WibpK0QeicMYibySvNA/132"
          alt=""
        />
      </div>
      <div class="info">
        <h3>想望着太阳</h3>
        <div class="wechat-code">
          <h5>微信号：Yxlhsx01</h5>
          <div>></div>
        </div>
      </div>
    </div>
    <div class="status">
      <div class="btn">+ 状态</div>
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

  <div class="settings item">
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
</script>

<style lang="less" scoped>
.top {
  height: 140px;
  box-sizing: border-box;
  padding-top: 20px;
  background-color: #ffffff;
  border-bottom: solid 1px #dbdbdb;

  .user {
    display: flex;

    .avatar {
      width: 30%;
      display: flex;
      justify-content: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        margin-left: 5px;
      }
    }

    .info {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h3 {
        color: #1f1f1f;
      }

      .wechat-code {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 15px;
        color: #7d7d7d;
      }
    }
  }

  .status {
    height: 60px;
    margin-left: 30%;
    display: flex;
    align-items: center;

    .btn {
      width: 50px;
      height: 20px;
      border: solid 1px #8b8b8b;
      border-radius: 10px;
      text-align: center;
      line-height: 20px;
      color: #8b8b8b;
      font-size: 14px;
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
