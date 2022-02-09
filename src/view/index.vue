<script setup lang="ts">
import {getCurrentInstance, onMounted} from "vue";
  const {proxy}:any = getCurrentInstance();
  let request = async () => {
    // const res = await proxy.Get('/top/playlist',{limit:10,order:'new'})
    // const res = await proxy.Post('')
    const res = await proxy.All([
        proxy.Get('/top/playlist',{limit:10,order:'new'})
      ,proxy.Get('/top/playlist',{limit:10,order:'new'})
    ])
    console.log(res,1112)
  };
  onMounted( ()=>{
    request()
  })

</script>

<template >
    <header class="headers"></header>
    <van-image class="logoImg" width="100%" height="60vh" lazy-load src="./logo.jpg" />
    <footer class="footer">
        <van-button class="loginButton center radios" style="bottom:24%" to="/login">登录</van-button>
        <div class="center loginButton" style="bottom:13%;display:flex;border:none">
            <van-button
                class="otherButton radios"
                color="#1b9f11"
            >微信登录</van-button>
            <van-button class="otherButton radios" style="margin-left:50px;" color="#e26060">微博登录</van-button>
        </div>

        <div class="newSpan center" style="bottom:6%" @click="$router.push('/register')">注册新账户</div>
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