<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
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
import GoodsList from 'components/content/goods/GoodsList.vue'

import HomeSwiper from './childHome/HomeSwiper.vue'
import RecommendView from './childHome/RecommendView.vue'
import FeatureView from './childHome/FeatureView.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'

export default {
  name:'Home',
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  components:{
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        // console.log(res);
        //1.请求多个数据
        this.banners = res.data.banner.list;
        console.log("请求多个数据");
        console.log(res.data);
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        console.log("请求商品数据");
        console.log(res);
        // 因为在我们加载对象的时候，用的是异步模式，
        // 即使promise立刻被处理返回，但是浏览器在开始加载对象的时候，
        // 这个对象还是没有定义，所以也就读不到属性
        this.goods[type].list.push(...res.data.list);
        // for(let n of res.data?.list){
        //   this.goods[type].list.push(n);
        // }
        this.goods[type].page+=1;
        
      })
    },

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
