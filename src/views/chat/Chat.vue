<template>
    <div class="container">
        <main>
            <ul>
                <li v-for="item in chatList" :class="item.type === 0 ? 'right' : 'left'">
                    <img :src="avatarComp(item.type)" alt />
                    <div>{{ item.text }}</div>
                </li>
            </ul>
        </main>
        <footer>
            <input type="text" />
            <button>发送</button>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const leftAvatar = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
const rightAvatar = 'https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLA8dh3ZzGkZFJqyRazDEicdt7BTTrGwZXR43Kx5icE6GxRkTaAMbx8w4OZw9dB8WibpK0QeicMYibySvNA/132'

const avatarComp = computed(v => v => {
    if (v === 0)
        return rightAvatar
    else if (v === 1)
        return leftAvatar
})

const chatList = [
    {
        type: 0,
        text: '你好呀！'
    },
    {
        type: 0,
        text: '我叫嘎嘣脆，请问你叫啥子名字'
    }, {
        type: 1,
        text: '你好，不方便透露'
    }, {
        type: 1,
        text: '啊是大家和大陆架傻傻的哈拉省的拉萨的话阿松大汉奸是打开就是大噶看啥可是到了'
    },
]
</script>

<style lang="less" scoped>
@main-height: calc(100vh - 90rem - @footer-height);
@footer-height: 100rem;
.container {
    main {
        box-sizing: border-box;
        padding: 20rem 0 20rem 0;
        height: @main-height;
        overflow: scroll;
        background-color: #e1e1e1;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style: none;

            li {
                display: flex;
                margin-bottom: 30rem;
                width: 700rem;

                &.right {
                    flex-direction: row-reverse;
                    justify-content: flex-start;

                    div {
                        position: relative;
                        margin-right: 30rem;
                        border-radius: 10rem;

                        &::before {
                            position: absolute;
                            top: 20rem;
                            right: -19rem;
                            width: 0;
                            height: 0;
                            content: "";
                            border-top: transparent solid 20rem;
                            border-left: #09b75e solid 20rem;
                            border-bottom: transparent solid 20rem;
                        }
                    }
                }

                &.left {
                    flex-direction: row;
                    justify-content: flex-start;

                    div {
                        position: relative;
                        margin-left: 30rem;
                        border-radius: 10rem;

                        &::before {
                            position: absolute;
                            top: 20rem;
                            left: -19rem;
                            width: 0;
                            height: 0;
                            content: "";
                            border-top: transparent solid 20rem;
                            border-right: #09b75e solid 20rem;
                            border-bottom: transparent solid 20rem;
                        }
                    }
                }

                img {
                    width: 80rem;
                    height: 80rem;
                }

                div {
                    box-sizing: border-box;
                    padding: 10rem 20rem 10rem 20rem;
                    max-width: 450rem;
                    min-height: 80rem;
                    background-color: #09b75e;
                    font-size: 28rem;
                }
            }
        }
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        height: @footer-height;
        background-color: #eaeaea;

        input {
            box-sizing: border-box;
            margin: 0;
            padding: 10rem;
            width: 500rem;
            height: calc(@footer-height * 0.7);
            border: none;
            border-radius: 8rem;
            background-color: #f2f2f2;
        }

        button {
            margin-left: 40rem;
            width: 120rem;
            height: calc(@footer-height * 0.55);
            border: none;
            border-radius: 10rem;
            background-color: #09b75e;
            color: #edfff5;
        }
    }
}
</style>
