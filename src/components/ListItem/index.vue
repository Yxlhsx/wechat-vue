<script lang="ts" setup>
interface ListItemProps {
    title: string
    sub: string
    time?: string
    img?: string
    size?: string
    arrow?: boolean
    noIco?: boolean
}

const props = withDefaults(defineProps<ListItemProps>(), {
    img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
})
</script>

<template>
    <!-- <div class="list-item" :class="size" @click="tap">
        <div class="l" v-if="!noIco">
            <img :src="img" :alt="title" />
        </div>
        <div class="r" :class="[noIco ? 'no-ico' : '', sub ? 'sub' : '']">
            <span class="title">{{ title }}</span>
            <span v-if="sub" class="sub">{{ sub }}</span>
            <div v-if="time">{{ time }}</div>
            <img v-if="arrow" src="/src/assets/arrow.svg" alt="右箭头" />
        </div>
    </div> -->
    <li class="flex list-none divide-y divide-slate-100">
        <div class="p-3">
            <img class="w-12" :src="props.img" :alt="props.title" />
        </div>
        <div class="flex flex-col justify-center items-start w-full">
            <div class="text-gray-950 text-base font-semibold">{{ props.title }}</div>
            <div class="text-gray-400 text-sm">{{ props.sub }}</div>
        </div>
    </li>
</template>

<style scoped></style>
