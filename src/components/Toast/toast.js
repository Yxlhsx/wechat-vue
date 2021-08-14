import { createVNode, render } from 'vue'

import ToastConstructor from './index.vue'

const Toast = (opts) => {
  const container = document.createElement('div')

  const vm = createVNode(ToastConstructor, opts)

  render(vm, container)

  // vm.props.remove = () => {
  //   console.log('我要开始删除了')
  //   render(null, container)
  // }
}

export default Toast
