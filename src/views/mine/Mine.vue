<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ListItem from '@/components/ListItem/index.vue'

const router = useRouter()

const menuList = ref([
    {
        title: '收藏',
        imgUrl: 'asd'
    },
    {
        title: '朋友圈',
        imgUrl: 'asd'
    },
    {
        title: '卡包',
        imgUrl: 'asd'
    },
    {
        title: '标签',
        imgUrl: 'asd'
    }
])

function to(url: string) {
    router.push(url)
}
</script>

<template>
    <div class="p-2 bg-[#ededed]">
        <div class="flex items-center pr-4">
            <div class="px-4">
                <img
                    class="w-14 rounded-xl"
                    src="https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLA8dh3ZzGkZFJqyRazDEicdt7BTTrGwZXR43Kx5icE6GxRkTaAMbx8w4OZw9dB8WibpK0QeicMYibySvNA/132"
                    alt="用户头像"
                />
            </div>
            <div class="flex-auto flex flex-col justify-between h-16">
                <p class="text-xl text-[#1f1f1f] font-semibold">想望着太阳</p>
                <div class="flex justify-between">
                    <p class="text-base text-[#7d7d7d]">微信号：Yxlhsx01</p>
                    <img src="/src/assets/arrow.svg" alt="右箭头" />
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div
                class="m-2 px-2 border border-[#8b8b8b] rounded-xl text-center text-[#8b8b8b] text-sm"
            >
                +状态
            </div>
        </div>
    </div>

    <div class="alone">
        <list-item title="服务" img="item.imgUrl" arrow @click="to('/serve')" />
    </div>

    <div class="menu-group">
        <list-item v-for="item in menuList" :title="item.title" :img="item.imgUrl" arrow />
    </div>

    <div class="alone" @click="to('/setting')">
        <list-item title="设置" img="item.imgUrl" arrow />
    </div>
</template>
