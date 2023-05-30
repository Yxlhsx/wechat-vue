<script lang="ts" setup>
import { ref } from 'vue'

interface ChatMsg {
    sender: 0 | 1
    contentType: 'text'
    content: string
    time: string
}

defineOptions({
    name: 'Chat'
})

const list = ref<ChatMsg[]>([
    {
        sender: 1,
        contentType: 'text',
        content: '你好啊',
        time: '2023-05-30 21:06:30'
    },
    {
        sender: 0,
        contentType: 'text',
        content: '？',
        time: '2023-05-30 21:06:40'
    },
    {
        sender: 0,
        contentType: 'text',
        content: '你有什么事吗？',
        time: '2023-05-30 21:06:40'
    }
])
</script>

<template>
    <div class="p-2">
        <ul>
            <li
                v-for="item in list"
                class="flex mb-3 last:mb-0"
                :class="{
                    'flex-row-reverse': item.sender == 1
                }"
            >
                <img
                    class="w-10 rounded"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    alt="头像"
                />
                <div class="mx-3 p-2 rounded bg-[#09b75e] text-gray-950">
                    {{ item.content }}
                </div>
            </li>
        </ul>
    </div>
</template>
