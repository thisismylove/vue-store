<template>
  <div class="app">
    <van-nav-bar title="主页" left-text="返回" fixed left-arrow/>

    <div class="con">
      <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
        <router-view class="animated"></router-view>
      </transition>
    </div>



    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>



  </div>
</template>

<script>
export default {
  name: "App",
  data:()=>({
    active:0
  })
};
</script>

<style lang="less">
@color : red;
.app {
  padding-top: 46px;
  margin-bottom: 50px;
}
p {color: @color}

.con {
  overflow-x: hidden;
}

.v-leave-to {
  opacity: 0;
  left: -200%;
  // transform: translateX(-200%);
  position: absolute;
}

</style>
