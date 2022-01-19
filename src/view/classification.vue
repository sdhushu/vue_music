<script setup lang="ts">
const theme = {
  navBarTitleFontSize: '17px',
  navBarTitleTextColor: '#fff',
  navBarBackgroundColor: 'none',
  cellBackgroundColor: 'none',
}
</script>

<template>
  <van-config-provider :theme-vars="theme" style="width: 100vw;background-color: #151618;padding-bottom: 30px">
    <header>
      <van-nav-bar title="音乐类型" style="padding-top: 30px;line-height: 22px" :border="false">
        <template #left>
          <van-icon name="arrow-left" color="#da8218" size="22"/>
          <p style="color: #da8218;font-size: 17px">返回</p>
        </template>
        <template #right>
          <van-icon name="search" size="22" color="#ff9500" style="margin-right: 16px"/>
        </template>
      </van-nav-bar>
    </header>
  <div class="barWrap">
    <div class="barType">
      <p class="barText">乡村</p>
    </div>

    <div class="barType">
      <p class="barText">乡村</p>
    </div>

    <div class="barType">
      <p class="barText">乡村</p>
    </div>

    <div class="barType">
      <p class="barText">乡村</p>
    </div>

    <div class="barType">
      <p class="barText">乡村</p>
    </div>
  </div>

  </van-config-provider>
</template>


<style lang="less" scoped>
.barWrap {
  overflow-y: auto;
}
.barType {
  margin-left: 50%;
  width: 686px;
  height: 224px;
  background: #FF9500;
  border-radius: 8px;
  transform: translate(-50%);
  margin-top: 30px;
  display: flex;
  .barText {
    font-size: 44px;
    font-family: Microsoft YaHei,serif;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 44px;
    align-self: center;
    margin-left: 66px;
  }
}
</style>