<script lang="ts" setup>
interface ListItemProps {
    title: string
    sub?: string
    time?: string
    img?: string
    mini?: boolean
    arrow?: boolean
    noIco?: boolean
}

const props = withDefaults(defineProps<ListItemProps>(), {
    img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
})
</script>

<template>
    <li class="flex list-none divide-y divide-slate-100">
        <div class="flex items-center" :class="props.mini ? 'p-2' : 'p-3'">
            <img :class="props.mini ? 'w-10' : 'w-14'" :src="props.img" :alt="props.title" />
        </div>

        <div
            class="flex-auto flex flex-col justify-center items-start w-8/12"
            :class="props.mini ? 'py-2' : 'py-3'"
        >
            <div class="text-gray-950 text-sm font-semibold">{{ props.title }}</div>
            <div class="truncate w-full text-gray-400 text-xs">{{ props.sub }}</div>
        </div>

        <div class="w-14" :class="props.mini ? 'py-3' : 'py-4'">
            <div class="text-gray-300 text-xs">{{ props.time }}</div>
        </div>
    </li>
</template>

<style scoped></style>
