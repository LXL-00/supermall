<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                     v-show="this.istabcontrolshow"
                     @tabcontrolclick="tabcontrolclick"
                     ref="tabcontrolref1"
                     class="tabcontrol1"></tab-control>
    <scroll class="scrollcontent" 
            ref="scrollback" 
            :ptype="3" 
            @scrollposition="scrollpositionhome"
            :pullup="true"
            @scrollpullup="scrollpulluphome">
        <home-swiper :banners="banners" 
                     @swiperimgloadtohome="swiperimgLoadhome"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行','新款','精选']" 
                     class="tab-control" 
                     @tabcontrolclick="tabcontrolclick"
                     ref="tabcontrolref2"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 组件是不可以直接click监听的，要加上.native表示监听原生组件 -->
    <back-top @click.native="backtopclick" v-show="isshow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroller/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'

import HomeSwiper from './childHome/HomeSwiper.vue'
import RecommendView from './childHome/RecommendView.vue'
import FeatureView from './childHome/FeatureView.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils/utils.js'
import {imgRefrashMixin} from 'common/mixins.js'

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
      },
      currenttype:'pop',
      isshow:false,
      setofftop:0,
      istabcontrolshow:false,
      savey:0,
      
    }
  },
  mixins:[imgRefrashMixin],
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    console.log("created");
    
  },
  activated(){
    console.log("activeted");
    this.$refs.scrollback.backtopscroll(0,this.savey,0);
    this.$refs.scrollback.scrollrefresh();
  },
  deactivated(){
    console.log("deactivated");
    this.savey=this.$refs.scrollback.getscrolly();
    console.log(this.savey);
    //取消全局监听事件
    this.$bus.$off('loadimgmix',this.itemimgmix);
  },
  mounted(){
    console.log(imgRefrashMixin);
  },
  computed:{
    showGoods(){
      return this.goods[this.currenttype].list;
    }
  },
  methods:{
    //事件监听的方法
    //根据监听tabcontrol点击的index（流行0，新款1，精选2）来决定当前的类型currenttype
    tabcontrolclick(index){
      console.log(index);
      switch (index) {
        case 0:
          this.currenttype='pop';
          break;
        case 1:
          this.currenttype='new';
          break;
        case 2:
          this.currenttype='sell';
          break;
      }
      if(this.$refs.tabcontrolref1!==undefined){
        this.$refs.tabcontrolref1.currentindex=index;
        this.$refs.tabcontrolref2.currentindex=index;
      }
      
    },
    //请求数据的方法
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        // console.log(res);
        //1.请求多个数据
        this.banners = res.data.banner.list;
        // console.log("请求多个数据");
        // console.log(res.data);
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        // console.log("请求商品数据");
        // console.log(res);
        // 因为在我们加载对象的时候，用的是异步模式，
        // 即使promise立刻被处理返回，但是浏览器在开始加载对象的时候，
        // 这个对象还是没有定义，所以也就读不到属性
        this.goods[type].list.push(...res.data.list);
        // for(let n of res.data?.list){
        //   this.goods[type].list.push(n);
        // }
        this.goods[type].page+=1;
        //每次加载更多的时候，要进行结束，以便下次能继续加载
        this.$refs.scrollback.scrollfinishPullUp();
      })
    },
    backtopclick(){
      //封装了方法 
      this.$refs.scrollback.backtopscroll(0,0,500);
      //另一种方法，没有封装方法 ,scrollTo(x位置，y位置，花费时间)
      //this.$refs.scrollback.bs.scrollTo(0,0,500);
      console.log("返回顶部");
    },
    scrollpositionhome(position){
      this.isshow=(-position.y)>1000?true:false;
      this.istabcontrolshow=(-position.y)>this.setofftop?true:false;
    },
    scrollpulluphome(){
      this.getHomeGoods(this.currenttype);
      console.log("上拉加载更多");
      //需要加载更多的时候，图片传进来需要时间，当图片没有完全传进来的时候，当前的整个height高度并不是图片完全加载好了的高度，所以要刷新确保图片全部加载进来了，得到正确的高度
      setTimeout(()=>{
        this.$refs.scrollback.scrollrefresh();
      },1000);
    },
    swiperimgLoadhome(){
      //获取轮播图加载了一次之后，一张轮播图所占的高度，即可以知道吸顶的位置
      this.setofftop=this.$refs.tabcontrolref2.$el.offsetTop;
      //console.log(this.$refs.tabcontrolref2.$el.offsetTop);
    }
  }
}
</script>
<style scoped>
#home{
  margin-left: -8px;
  margin-right: -8px;
  margin-top: -10px;
  
}
.home-nav{
  /* margin-top: -5px; */
  background-color:  #ff8198;
  color:white;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; 
}
.tabcontrol1{
  /* 吸顶作用 */
  position: relative;
  top: 44px;
  z-index: 9;
}
.scrollcontent{
  overflow: hidden;
  height: 960px;
  margin-top: 44px;
  margin-bottom: 54px;
}
/* .scrollcontent{
  height: calc(100%-98px);
  overflow: hidden;
  margin-top: 44px;
  margin-bottom: 54px;
} */
</style>
