import { createVNode, render } from 'vue'

import ToastConstructor from './index.vue'

const Toast = (opts) => {
  const container = document.createElement('div')

  const msg = opts.msg

  const vm = createVNode(ToastConstructor, opts)

  render(vm, container)
}

export default Toast
