<template>
  <teleport to="#toast-target">
    <div class="toast">1{{ msg }}</div>
    <h1>{{ type }}</h1>
  </teleport>
</template>

<script setup>
import { defineProps, useContext } from 'vue'

const props = defineProps({
  msg: String,
  type: {
    type: String
  }
})

console.log(props.type)
</script>

<style lang="less">
.toast {
  z-index: 100;
  position: fixed;
  top: 200rem;
  left: 200rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 30rem;
}
</style>
