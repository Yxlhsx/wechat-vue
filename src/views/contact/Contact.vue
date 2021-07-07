<template>
  <div class="contact">
    <div class="menu-block">
      <div class="menu-item">
        <div class="ico"><img src="/src/assets/contact/friend.png" alt="新的朋友" /></div>
        <div class="title">新的朋友</div>
      </div>
      <div class="menu-item">
        <div class="ico"><img src="/src/assets/contact/addgroup.png" alt="群聊" /></div>
        <div class="title">群聊</div>
      </div>
      <div class="menu-item">
        <div class="ico"><img src="/src/assets/contact/tag.png" alt="标签" /></div>
        <div class="title">标签</div>
      </div>
      <div class="menu-item">
        <div class="ico"><img src="/src/assets/contact/offical.png" alt="公众号" /></div>
        <div class="title">公众号</div>
      </div>
    </div>

    <div class="contact-block" v-for="item in 24" :key="item">
      <span class="contact-head">{{ item }}</span>
      <div class="contact-item" v-for="_item in 5" :key="_item">
        <div class="avatar">
          <img
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            alt="头像"
          />
        </div>
        <div class="name">工具人{{ _item }}号</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
@item-heigh: 110rem;

.contact {
  .menu-block {
    background-color: #ffffff;
    .menu-item {
      display: flex;
      align-items: center;

      .ico {
        width: @item-heigh + 30rem;
        height: @item-heigh;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: @item-heigh * 0.7;
          height: @item-heigh * 0.7;
          border-radius: 12rem;
        }
      }

      .title {
        width: calc(100vw - (@item-heigh + 30rem));
        height: @item-heigh;
        font-size: 32rem;
        line-height: @item-heigh;
      }
    }

    & .menu-item:not(:last-child) {
      .title {
        border-bottom: #e8e8e8 solid 1rem;
      }
    }
  }

  .contact-block {
    .contact-head {
      display: inline-block;
      height: 70rem;
      font-size: 24rem;
      line-height: 70rem;
      text-indent: 30rem;
      color: #5d5d5d;
    }

    .contact-item {
      background-color: #ffffff;
      height: @item-heigh;
      display: flex;
      align-items: center;

      .avatar {
        width: @item-heigh + 30rem;
        height: @item-heigh;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: @item-heigh * 0.7;
          height: @item-heigh * 0.7;
          border-radius: 12rem;
        }
      }

      .name {
        width: calc(100vw - @item-heigh);
        height: @item-heigh;
        font-size: 32rem;
        line-height: @item-heigh;
        border-bottom: #e8e8e8 solid 1rem;
      }
    }
  }
}
</style>
