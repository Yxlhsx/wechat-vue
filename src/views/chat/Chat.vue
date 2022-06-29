<template>
    <main ref="mainRef">
        <ul ref="ulRef">
            <li v-for="item in chatList" :class="item.type === 0 ? 'right' : 'left'">
                <img :src="avatarComp(item.type)" alt />
                <div>
                    <p>{{ item.text }}</p>
                </div>
            </li>
        </ul>
    </main>
    <footer>
        <input type="text" v-model="msg" />
        <Button @click="send">发送</Button>
    </footer>
</template>

<script setup>
import { ref, computed, onMounted, reactive, nextTick } from 'vue'
import { useRoute } from 'vue-router'

import Button from '@/components/Button/index.vue'
import Toast from '@/components/Toast/toast'

const route = useRoute()

const mainRef = ref(null)
const ulRef = ref(null)

const contactName = ref('联系人')
const leftAvatar = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
const rightAvatar =
    'https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLA8dh3ZzGkZFJqyRazDEicdt7BTTrGwZXR43Kx5icE6GxRkTaAMbx8w4OZw9dB8WibpK0QeicMYibySvNA/132'

const avatarComp = computed(v => v => {
    if (v === 0) return rightAvatar
    else if (v === 1) return leftAvatar
})

const chatList = reactive([
    {
        type: 0,
        text: '你好呀！'
    },
    {
        type: 0,
        text: '我叫嘎嘣脆，请问你叫啥子名字'
    },
    {
        type: 1,
        text: '你好，不方便透露'
    },
    {
        type: 1,
        text: '啊是大家和大陆架傻傻的哈拉省的拉萨的话阿松大汉奸是打开就是大噶看啥可是到了'
    }
])

for (let i = 0; i < 10; i++) {
    chatList.push({
        type: 0,
        text: '我是生成的对话'
    })
}

const msg = ref('')

onMounted(() => {
    contactName.value = route.params.contactName
})

function send() {
    // Toast({
    //     msg: '消息',
    //     type: 'zzz',
    //     duration: 3000
    // })
    if (msg.value) {
        chatList.push({
            type: 0,
            text: msg.value
        })
        msg.value = ''
        nextTick(() => {
            mainRef.value.scrollTop = ulRef.value.offsetHeight - mainRef.value.offsetHeight
        })
    }
}
</script>

<style lang="less" scoped>
@main-height: calc(100vh - 90rem - @footer-height);
@footer-height: 120rem;

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
                        top: 25rem;
                        right: -19rem;
                        width: 0;
                        height: 0;
                        content: '';
                        border-top: transparent solid 15rem;
                        border-left: #09b75e solid 20rem;
                        border-bottom: transparent solid 15rem;
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
                        top: 25rem;
                        left: -19rem;
                        width: 0;
                        height: 0;
                        content: '';
                        border-top: transparent solid 15rem;
                        border-right: #09b75e solid 20rem;
                        border-bottom: transparent solid 15rem;
                    }
                }
            }

            img {
                width: 80rem;
                height: 80rem;
                border-radius: 10rem;
            }

            div {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding: 10rem 20rem;
                max-width: 460rem;
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
        height: 70rem;
        border: none;
        border-radius: 8rem;
        background-color: #f2f2f2;
        font-size: 22rem;

        &:focus {
            border: none;
        }
    }

    Button {
        margin-left: 20rem;
        width: 120rem;
        height: 70rem;
    }
}
</style>
