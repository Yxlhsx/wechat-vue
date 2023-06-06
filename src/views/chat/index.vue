<script lang="ts" setup>
import { nextTick, ref } from 'vue'

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
        content: '你有什么事吗？',
        time: '2023-05-30 21:06:40'
    }
])

const msgListEle = ref<HTMLUListElement>()

const msgValue = ref('')
function handleSendMsg() {
    if (!msgValue.value) {
        return
    }

    list.value.push({
        sender: 1,
        contentType: 'text',
        content: msgValue.value,
        time: '2023-05-30 21:06:30'
    })
    msgValue.value = ''

    nextTick(() => {
        const scrollHeight = msgListEle.value?.scrollHeight
        msgListEle.value?.scrollTo({ top: scrollHeight })
    })
}
</script>

<template>
    <div class="flex flex-col h-full bg-[#ededed]">
        <ul ref="msgListEle" class="flex-auto overflow-y-scroll p-2">
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
                <div
                    class="mx-3 p-2 rounded text-gray-950"
                    :class="{
                        'bg-[#09b75e]': item.sender == 1,
                        'bg-white': item.sender == 0
                    }"
                >
                    {{ item.content }}
                </div>
            </li>
        </ul>

        <div class="flex gap-2 items-center px-2 py-2 bg-gray-100">
            <div v-if="false"></div>
            <input
                v-model="msgValue"
                class="flex-auto indent-1.5 h-10 bg-white rounded"
                type="text"
                @keyup.enter="handleSendMsg"
            />
            <div>
                <div></div>
                <button
                    class="px-2 h-8 rounded bg-[#09b75e] text-white leading-8 select-none"
                    @click="handleSendMsg"
                >
                    发送
                </button>
            </div>
        </div>
    </div>
</template>
