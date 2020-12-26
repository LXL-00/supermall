<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childHome/HomeSwiper.vue'
import RecommendView from './childHome/RecommendView.vue'
import {getHomeMultidata} from 'network/home.js'
export default {
  name:'Home',
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created(){
    getHomeMultidata().then(res=>{
      // console.log(res);
      //1.请求多个数据
      this.banners = res.data.banner.list;
      console.log(this.banners);
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>
<style scoped>
#home{
  margin-left: -8px;
  margin-right: -8px;
}
.home-nav{
  margin-top: -10px;
  background-color:  #ff8198;
  color:white;
}
</style>