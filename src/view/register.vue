<script setup lang="ts">
import {ref} from 'vue'
const themeVars = {
  navBarBackgroundColor: 'none',
  navBarTitleTextColor: '#fff',
  navBarIconColor: '#da8218',
  navBarTextColor: '#da8218',
  navBarTitleFontSize: '17px',
  navBarArrowSize: '17px',
  buttonDefaultHeight: '44px',
  fieldInputTextColor: '#fff',
  cellBackgroundColor: 'none',
  cellGroupBackgroundColor:'none'
}

const username = ref('');
const password = ref('');
const onSubmit = (values: any) => {
  console.log('submit', values);
};
</script>


<template>
  <div class="register_page">
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar
          title="注册"
          left-arrow
          :border="false"
          style="line-height: 22px;padding-top: 30px;font-size: 17px"
      >
        <template #left>
          <van-icon name="arrow-left" color="#da8218" size="18"/>
          <p class="pageBack">返回</p>
        </template>
      </van-nav-bar>

      <div class="register_text">
        <p>账号注册</p>
      </div>

      <van-form @submit="onSubmit" style="margin-top: 74px;margin-left: 48px">
        <van-cell-group inset>
          <van-field
              style="border-bottom: 1px solid #D1D1D6;opacity: 0.7"
              :border = "false"
              v-model="username"
              clearable
              size="large"
              name="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              style="margin-top: 18px;border-bottom: 1px solid #D1D1D6;opacity: 0.7"
              clearable
              v-model="password"
              type="password"
              name="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin-left: 16px;">
          <van-button class="submitButton" native-type="submit" color="#FF9500">
            注册
          </van-button>
        </div>
      </van-form>

      <van-image width="50px" height="50px" src="./Path.png" style="margin-top: 130px;margin-left: 50%;transform: translate(-50%);"></van-image>
    </van-config-provider>

    <div class="footer">
      <p>
        注册即代表同意 <span style="color: #FF9500 ">用户使用协议</span> &  <span style="color: #FF9500 ">相关法律法规</span>
      </p>
    </div>
  </div>

</template>


<style lang="less" scoped>
  .register_page {
    width: 100vw;
    height: 100vh;
    background-image: url(/bground.png);
    background-size: 100% 100%;
    .pageBack {
      color: #da8218;
    }
    .register_text {
      width: 224px;
      height: 55px;
      font-size: 56px;
      font-family: Microsoft YaHei,serif;
      font-weight: 400;
      color: #FEFEFE;
      line-height: 68px;
      margin-top: 63px;
      margin-left: 50%;
      transform: translate(-50%);
    }
    .submitButton {
      border-radius: 4px;
      width: 558px;
      margin-top: 121px
    }
    .footer {
      width: 457px;
      height: 74px;
      font-size: 32px;
      font-family: Microsoft YaHei,serif;
      font-weight: 400;
      color: #8F8E94;
      line-height: 42px;
      margin-left: 50%;
      transform: translate(-50%);
      margin-top: 67px;
    }
  }
</style>