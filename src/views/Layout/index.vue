<template>
  <div>
    <router-view></router-view>

    <van-tabbar route active-color="#21b97a" inactive-color="#000">
      <van-tabbar-item to="/ " icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/house" icon="search">找房</van-tabbar-item>
      <van-tabbar-item to="/qa" icon="records">资讯</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
