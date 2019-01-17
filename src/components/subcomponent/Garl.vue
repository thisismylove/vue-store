<template>
  <div class="demo-icon">
    <router-link class="van-col" v-for="item in list" :key="item.src" tag="div" to="item.path">
      <i class="van-icon">
        <img :src="item.src" alt>
      </i>
      <span>{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    list:[
      {path:"/home/homeList",src:"static/menu1.png",title:"定位"},
      {path:"/home/homeshop",src:"static/menu2.png",title:"点餐"},
      {path:"/home/homeList",src:"static/menu3.png",title:"定位"},
      {path:"/home/homeList",src:"static/menu4.png",title:"定位"},
      {path:"/home/homeList",src:"static/menu5.png",title:"定位"},
      {path:"/home/homeList",src:"static/menu6.png",title:"定位"}
    ]
  })
};
</script>

<style lang="less">
.demo-icon {
  font-size: 0;
  padding-top: 10px;
  .demo-icon-list {
    padding-top: 10px;
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
  }
 .van-col {
    float: none;
    text-align: center;
    width: 33.333333%;
    display: inline-block;
    vertical-align: middle;
    img {
      width: 60px;
    }
  }
 .van-col span {
    display: block;
    padding: 0 5px;
    font-size: 12px;
    line-height: 14px;
  }
 .van-icon {
    font-size: 32px;
    margin: 15px 0;
    color: #455a64;
  } 
}
</style>