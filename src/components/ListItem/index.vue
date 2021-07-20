<template>
  <div class="list-item">
    <div class="ico"><img :src="img" :alt="title" /></div>
    <div class="title">
      <span>{{ title }}</span>
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
  img: {
    type: String,
    required: true,
    default: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  },
  arrow: {
    type: Boolean
  }
})
</script>

<style lang="less" scoped>
@item-heigh: 100rem;

.list-item {
  background-color: #ffffff;
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
    box-sizing: border-box;
    padding-right: 35rem;
    font-size: 32rem;
    line-height: @item-heigh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

& .list-item:not(:last-child) {
  .title {
    border-bottom: #e8e8e8 solid 1rem;
  }
}
</style>
