<template>
    <div class="user-list">
        <ul>
            <li>
                <img
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    alt="头像"
                />
                <p>工具人</p>
            </li>
            <li>
                <img
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    alt="头像"
                />
                <p>工具人</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive, nextTick } from 'vue'
import { useRoute } from 'vue-router'

import Button from '@/components/Button/index.vue'
import Toast from '@/components/Toast/toast'

const route = useRoute()
</script>

<style lang="less" scoped>
@main-height: calc(100vh - 90rem - @footer-height);
@footer-height: 120rem;

.user-list {
    width: 100%;
    height: 240rem;
    background-color: white;
    padding: 0 40rem;
}
.user-list > ul {
    display: flex;
    align-items: center;
    height: 100%;

    li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 130rem;
        height: 160rem;

        img {
            width: 120rem;
            border-radius: 20rem;
        }

        p {
            font-size: 24rem;
        }
    }

    li:not(:last-child) {
        margin-right: 40rem;
    }
}
</style>
