<script setup lang="ts">
const theme = {
  navBarTitleFontSize: '17px',
  navBarTitleTextColor: '#fff',
  navBarBackgroundColor: 'none',
}

const images = [
  'http://p1.music.126.net/FsK9YPTFGZrrH-tBy0Su7A==/109951166931209170.jpg?imageView&quality=89',
  'http://p1.music.126.net/oBugeAFDKSsWRcZBRtVgTQ==/109951166931350151.jpg?imageView&quality=89',
];
</script>


<template>
  <van-config-provider :theme-vars="theme">
    <header>
      <van-nav-bar title="Musical" style="padding-top: 30px;line-height: 22px" :border="false">
        <template #left>
          <van-icon name="wap-nav" size="22" color="#ff9500" style="margin-left: 16px"/>
        </template>
        <template #right>
          <van-icon name="search" size="22" color="#ff9500" style="margin-right: 16px"/>
        </template>
      </van-nav-bar>
    </header>

    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image" >
        <img :src="image"  alt="" style="width: 375px;height: 220px;"/>
      </van-swipe-item>
    </van-swipe>
    <div style="background-color: #151618;padding-bottom: 22px">
      <div class="musicType">
        <sapn style="padding-left: 16px;">音乐类型</sapn>
        <span style="margin-right: 16px;color: #e08403">查看全部</span>
      </div>

      <div class="musicType_block">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </div>
    </div>

    <div class="newSongs">
      <div class="musicType">
        <sapn style="padding-left: 16px;">新专辑</sapn>
        <span style="margin-right: 16px;color: #e08403">查看全部</span>
      </div>

      <div class="musicType_block">
        <div class="block" style="width: 140px;height: 196px;">
          <img
              src="https://p3.music.126.net/KXO9cqTQf875RYGBcSRjUA==/109951164425343786.jpg?param=200y200"
              alt=""
              style="width:140px;height: 140px;" />
          <div style="color: #ffffff">
            <p>Loo</p>
            <p>tre</p>
          </div>

        </div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
      </div>
    </div>

  </van-config-provider>

</template>


<style lang="less" scoped>
header {
  width: 750px;
  height: 102px;
  background-color: #151618;
  padding-bottom: 20px;
}
.musicType {
  width: 750px;
  height: 120px;
  background-color: #151618;
  font-size: 34px;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -8px;
}

.musicType_block {
  display: flex;
  width: 750px;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  .block {
    width: 440px;
    height: 240px;
    background: #FF9500;
    border-radius: 8px;
    flex: none;
    margin-left: 16px
  }
}

.musicType_block::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.newSongs {
  width: 750px;
  height: 550px;
  background-color: #151618;
  margin-top: -5px;
}

</style>