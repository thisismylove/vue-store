<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white" class="demo-swipe">
      <van-swipe-item v-for="item in lubotuList" :key="item.img">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>

    <Garl></Garl>
  </div>
</template>
<script>
import Garl from '../subcomponent/Garl.vue'

export default {
  data: () => ({
    lubotuList: []
  }),
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      // 第一种
      this.axios.get("http://localhost:5000/api/getlunbo").then(result => {
        console.log(result);
        if (result.status === 200) {
          this.lubotuList = result.data.message;
        } else {
        }
      });
      // 第二种
      // this.$http.get('http://localhost:5000/api/getlunbo')
      //   .then(result=>{
      //   console.log(result)
      //   if (result.status === 200) {
      //     this.lubotuList = result.data.message
      //   }else {

      //   }
      // })
    }
  },
  components:{
    Garl
  }
};
</script>

<style lang="less">
.demo-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}

</style>