import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

createApp(App).use(router).mount('#app')
