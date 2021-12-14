export function throttle(fn, delay) {
  let valid = false
  return function () {
    if (valid) {
      //休息时间 暂不接客
      return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = true
    setTimeout(() => {
      fn()
      valid = false
    }, delay)
  }
}
