import { createVNode, render } from 'vue'

import ToastConstructor from './index.vue'

const Toast = (opts) => {
  const container = document.createElement('div')

  const vm = createVNode(ToastConstructor, opts)

  render(vm, container)
  document.body.appendChild(container)

  setTimeout(() => {
    console.log('我要开始删除了')
    document.removeChild(container)
  }, 2000)
}

const removeContainer = (ele) => {
  const index = stack.findIndex((item) => item === ele)
  if (~index) {
    stack.splice(index, 1)
    setStyle()
  }
}

export default Toast
