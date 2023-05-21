import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    base: './', // 设置打包路径
    server: {
        host: '0.0.0.0',
        port: 10086,
        open: true,
        cors: true
    }
})
