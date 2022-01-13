<script setup lang="ts">

</script>

<template >
    <header class="headers"></header>
    <van-image class="logoImg" width="100%" height="60vh" lazy-load src="./logo.jpg" />
    <footer class="footer">
        <van-button class="loginButton center radios" style="bottom:24%">登录</van-button>
        <div class="center loginButton" style="bottom:13%;display:flex;border:none">
            <van-button
                class="otherButton radios"
                color="#1b9f11"
            >微信登录</van-button>
            <van-button class="otherButton radios" style="margin-left:50px;" color="#e26060">微博登录</van-button>
        </div>

        <div class="newSpan center" style="bottom:6%">注册新账户</div>
    </footer>
</template>

<style lang="less" scoped>
.headers {
    padding-top: 4vh;
    background-color: #4b2b96;
    margin-bottom: -1vh;
    .logoImg {
        pointer-events: none;
    }
}

.radios {
    border-radius: 10px;
}

.center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.footer {
    margin-top: -10px;
    background-color: #151618;
    height: 37vh;
    .loginButton {
        width: 550px;
        height: 100px;
        border: 1px solid gray;
        background-color: #151517;
        color: white;
    }
    .otherButton {
        width: 250px;
        height: 100px;
    }
    .newSpan {
        color: #fd9a01;
    }
}
</style>