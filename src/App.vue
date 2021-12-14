<template>
  <router-view />
</template>

<script setup>
//加载页面时执行一次
changeMargin()

//监听浏览器宽度的改变
window.onresize = function () {
  changeMargin()
}

function changeMargin() {
  const width = document.body.clientWidth
  const html = document.getElementsByTagName('html')[0]
  html.style.fontSize = width / 750 + 'px'
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans SC';
}

a,
button,
input {
  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}
</style>
