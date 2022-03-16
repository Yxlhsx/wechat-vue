<template>
  <div class="list-item" :class="size" @click="to">
    <div class="l" v-if="!noIco">
      <img :src="img" :alt="title" />
    </div>
    <div class="r" :class="[noIco ? 'no-ico' : '', sub ? 'sub' : '']">
      <span class="title">{{ title }}</span>
      <span v-if="sub" class="sub">{{ sub }}</span>
      <!-- <div v-if="time">{{ time }}</div> -->
      <img v-if="arrow" src="/src/assets/arrow.svg" alt="右箭头" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  sub: {
    type: String,
    required: false,
    default: ''
  },
  time: {
    type: String,
    required: false,
    default: ''
  },
  img: {
    type: String,
    default: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  size: {
    type: String,
    required: false,
    default: 'default'
  },
  arrow: {
    type: Boolean,
    default: false
  },
  noIco: {
    type: Boolean,
    default: false
  },
  to: {
    type: Function,
    default: function () { }
  }
})
</script>

<style lang="less" scoped>
.list-item.default {
  @item-heigh: 100rem;

  background-color: #ffffff;
  display: flex;
  align-items: center;

  &:active {
    filter: alpha(Opacity=60);
    opacity: 0.6;
    -webkit-tap-highlight-color: transparent;
  }

  .l {
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

  .r {
    width: calc(100vw - (@item-heigh + 30rem));
    height: @item-heigh;
    box-sizing: border-box;
    padding-right: 35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.no-ico {
      width: calc(100vw - 30rem);
      margin-left: 30rem;
    }

    .title {
      font-size: 32rem;
      line-height: @item-heigh;
    }

    .sub {
      font-size: 24rem;
      color: #bababa;
    }
  }
}

.list-item.big {
  @item-heigh: 120rem;

  background-color: #ffffff;
  display: flex;
  align-items: center;

  &:active {
    filter: alpha(Opacity=60);
    opacity: 0.6;
    -webkit-tap-highlight-color: transparent;
  }

  .l {
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

  .r {
    width: calc(100vw - (@item-heigh + 30rem));
    height: @item-heigh;
    box-sizing: border-box;
    padding-right: 35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.sub {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      span {
        display: block;

        &.title {
          font-size: 32rem;
          line-height: calc(@item-heigh / 2);
        }
      }
    }

    &.no-ico {
      width: calc(100vw - 30rem);
      margin-left: 30rem;
    }

    .title {
      font-size: 32rem;
      line-height: @item-heigh;
    }

    .sub {
      font-size: 24rem;
      color: #bababa;
    }
  }
}

& .list-item:not(:last-child) {
  .r {
    border-bottom: #e8e8e8 solid 1rem;
  }
}
</style>
