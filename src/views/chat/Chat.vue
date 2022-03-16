<template>
    <div class="container">
        <main>
            
        </main>
        <footer>
            <input type="text" />
        </footer>
    </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
@main-height: calc(100vh - 90rem - @footer-height);
@footer-height: 100rem;

.container {
    main {
        height: @main-height;
        background-color: #dbdbdb;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        height: @footer-height;
        background-color: #efefef;

        input {
            margin: 0;
            width: 500rem;
            height: calc(@footer-height * 0.6);
            border: none;
            border-radius: 8rem;
        }
    }
}
</style>
