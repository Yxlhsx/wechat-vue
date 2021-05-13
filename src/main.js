import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

createApp(App).use(router).use(store).mount('#app')
