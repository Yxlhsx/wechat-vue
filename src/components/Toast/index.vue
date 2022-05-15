<template>
  <div class="toast" v-show="closed">
    <span>1{{ msg }}</span>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'

const props = defineProps({
  msg: String,
  type: {
    type: String
  },
  duration: {
    type: Number,
    default: 2000
  }
})

const closed = ref(true)

const onClose = () => {
  closed.value = false
  setTimeout(() => {
    props.remove()
  }, 200)
}

onMounted(() => {
  // setTimeout(() => {
  //   onClose()
  // }, props.duration)
})
</script>

<style lang="less">
.toast {
  max-width: 600rem;
  height: 60rem;
  padding: 0 15rem;
  border-radius: 15rem;
  line-height: 60rem;
  z-index: 1000;
  position: fixed;
  top: 45vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 30rem;
}
</style>
