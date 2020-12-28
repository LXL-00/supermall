<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" :class="tab-control"></tab-control>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表1</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表1</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表1</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表</div>
    <div>列表1</div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'

import HomeSwiper from './childHome/HomeSwiper.vue'
import RecommendView from './childHome/RecommendView.vue'
import FeatureView from './childHome/FeatureView.vue'

import {getHomeMultidata} from 'network/home.js'

export default {
  name:'Home',
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  components:{
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView
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
  margin-top: 44px;
}
.home-nav{
  margin-top: -5px;
  background-color:  #ff8198;
  color:white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>