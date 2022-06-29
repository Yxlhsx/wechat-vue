<template>
    <button class="Button">
        <slot></slot>
    </button>
</template>

<script setup></script>

<style lang="less">
.Button {
    border: none;
    border-radius: 10rem;
    background-color: #09b75e;
    color: #edfff5;
    font-size: 28rem;
    line-height: 28rem;

    &:active {
        background-color: #0a9d51;
    }
}
</style>
