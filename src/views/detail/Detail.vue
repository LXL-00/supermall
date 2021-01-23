<template>
  <div id="detail">
    <detail-navbar class="detailnavbar" ref="detailnavbarref"></detail-navbar>
    <scroll class="detailscroll" 
            ref="scrollback" 
            :ptype="3" 
            @scrollposition="scrollpositiondetail"
            :pullup="true"
            @scrollpullup="scrollpullupdetail">
      
      <detail-swiper :topimgswiper="topimg"></detail-swiper>
      <detail-base-info :detailbaseinfogoods="detailgoods"></detail-base-info>
      <detail-shop-info :detailshopinfos="detailshop"></detail-shop-info>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
      <div>{{}}</div>
    </scroll>
    <back-top @click.native="backtopclick" v-show="isshow"></back-top>
  </div>
</template>

<script>
import DetailNavbar from 'views/detail/childDetail/DetailNavbar.vue'
import DetailSwiper from 'views/detail/childDetail/DetailSwiper.vue'
import DetailBaseInfo from 'views/detail/childDetail/DetailBaseInfo.vue'
import DetailShopInfo from 'views/detail/childDetail/DetailShopInfo.vue'

import Scroll from 'components/common/scroller/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'
import {getDetail,detailGoodsInfo,detailShopInfo} from 'network/detail.js'

export default {
  name:'Detail',
  data(){
    return {
      detailid:null,
      topimg:[],
      detailgoods:{},
      detailshop:{},
      setofftop:0,
      isshow:false,
      isshowdetailnavbar:false,
    }
  },
  components:{
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    BackTop,
    
  },
  created(){
    this.detailid=this.$route.params.iid;
    getDetail(this.detailid).then(res=>{
        console.log(res);
        //获取轮播图数据
        const data=res.result;
        this.topimg=data.itemInfo.topImages;
        console.log(this.topimg);
        //获取商品详情信息
        this.detailgoods=new detailGoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
        //获取商家信息
        this.detailshop=new detailShopInfo(data.shopInfo);
      })
  },
  methods:{
    backtopclick(){
      //封装了方法 
      this.$refs.scrollback.backtopscroll(0,0,500);
      //另一种方法，没有封装方法 ,scrollTo(x位置，y位置，花费时间)
      //this.$refs.scrollback.bs.scrollTo(0,0,500);
      console.log("返回顶部");
    },
    scrollpositiondetail(position){
      this.isshow=(-position.y)>200?true:false;
      // this.isshowdetailnavbar=(-position.y)>this.setofftop?true:false;
    },
    scrollpullupdetail(){
      console.log("上拉加载更多");
      //需要加载更多的时候，图片传进来需要时间，当图片没有完全传进来的时候，当前的整个height高度并不是图片完全加载好了的高度，所以要刷新确保图片全部加载进来了，得到正确的高度
      setTimeout(()=>{
        this.$refs.scrollback.scrollrefresh();
      },1000);
    },
   
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100%;
}
.detailnavbarref{
  position: relative;
  z-index: 11;
  background-color: #fff;
}
.detailscroll{
  height:  960px;
  overflow: hidden;
}
</style>