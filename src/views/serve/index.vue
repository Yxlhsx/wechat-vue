<script setup lang="ts">
import { ref } from 'vue'

const list = ref([
    {
        title: '金融理财',
        children: [
            {
                title: '信用卡还款'
            },
            {
                title: '理财通'
            },
            {
                title: '保险服务'
            }
        ]
    }
])
</script>

<template>
    <div class="flex flex-col items-center pt-10 pb-20 bg-[#ededed]">
        <section class="flex justify-around mb-4 py-10 w-11/12 rounded-md bg-[#2BAC69] text-white">
            <div>
                <img class="w-8 h-8" src="" alt="收付款" />
                <p>收付款</p>
            </div>
            <div>
                <img class="w-8 h-8" src="" alt="钱包" />
                <p>钱包</p>
            </div>
        </section>

        <section v-for="item in list" class="mb-4 p-4 w-11/12 rounded-md bg-white last:mb-0">
            <div class="text-gray-500">{{ item.title }}</div>
            <ul class="flex py-2 text-sm">
                <li v-for="citem in item.children" class="my-4 mr-8 last:mr-0">
                    <img class="w-8 h-8" src="" :alt="citem.title" />
                    <p>{{ citem.title }}</p>
                </li>
            </ul>
        </section>
    </div>
</template>
