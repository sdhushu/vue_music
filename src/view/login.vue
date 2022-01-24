<script setup lang="ts">
import { ref } from "vue";
import router from "../router";
const username = ref('');
const password = ref('');
const themeVars = {
      fieldInputTextColor: '#fff',
      buttonIconSize: '30px',
    cellBackgroundColor: 'none',
    cellGroupBackgroundColor:'none'
};

const onSubmit = (values: any) => {
    console.log('submit', values);
};
</script>


<template >
    <header class="headers">
        <div class="titleBar">
            <van-icon name="arrow-left" color="#da8218" />
            <span class="back" @click="router.push('/')">返回</span>
            <span class="title">登录</span>
        </div>

        <div class="content">
            <div class="cicle">
                <div class="triangle"></div>
            </div>
            <h2 style="margin-bottom:50px">Musical</h2>
            <van-config-provider :theme-vars="themeVars" style="margin-left: 50px;">
                <van-form @submit="onSubmit" >
                    <van-cell-group inset>
                        <van-field
                            clearable
                            size="large"
                            :border="false"
                            v-model="username"
                            name="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                            class="InputStyle"
                        />
                        <van-field
                            clearable
                            v-model="password"
                            type="password"
                            name="密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                            class="InputStyle"
                        />
                    </van-cell-group>
                    <div style="margin: 20px;">
                        <van-button icon="chat-o" class="wechatButton" color="#072752"></van-button>
                        <van-button  class="loginButton" type="primary" native-type="submit">登录</van-button>
                        <van-button icon="bar-chart-o" color="#072752" class="wechatButton"></van-button>
                    </div>
                </van-form>
                <div style="color:#fff">忘记密码？</div>
            </van-config-provider>
        </div>

        <footer class="footers">
            <div style="color:#da8218;position: absolute;bottom:2%;left:50%;transform: translate(-30%);" @click="router.push('/register')"><p>新账号注册</p></div>
        </footer>
    </header>
</template>

<style lang="less" scoped>
.headers {
    padding-top: 4vh;
    width: 100vw;
    background-image: url(@/assets/image/Background.png);
    background-size: 100% 100%;
    .titleBar {
        padding-left: 20px;
    }
    .back {
        margin-left: 10px;
        font-size: 28px;
        color: #da8218;
    }
    .title {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        font-size: 30px;
        color: #fff;
    }

    .content {
        height: 46vh;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        .cicle {
            margin: 0 auto;
            margin-top: 120px;
            border-radius: 50%;
            width: 20vw;
            height: 11vh;
            border: 10px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            .triangle {
                width: 0;
                height: 0;
                border-radius: 5px;
                border: 35px solid transparent;
                border-left-color: #fff;
                border-right-color: #fff;
            }
        }
        .InputStyle {
            color: #fff;
            border-bottom: 3px solid #5a5f6b;
        }
    }

    .loginButton {
        width: 350px;
        height: 80px;
        border-radius: 10px;
    }

    .wechatButton {
        width: 100px;
        height: 80px;
        border-radius: 5px;
        opacity: 0.5;
    }
    .footers {
        height: 38vh;
    }
}
</style>