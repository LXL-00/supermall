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
      <detail-goods-infos :detailinfo="detailgoodsmore" @imgloadtodetail="detailimgload"></detail-goods-infos>
      <detail-param-info :detailparaminfos="detailparammore"></detail-param-info>
      <detail-comment-info :detailcommentinfos="detailcommentmore"></detail-comment-info>
      <!-- <detail-recommend-info :detailrecommendinfos="detailrecommendmore"></detail-recommend-info> -->
      <goods-list :goods="detailrecommendmore"></goods-list>

    </scroll>
    <back-top @click.native="backtopclick" v-show="isshow"></back-top>
  </div>
</template>

<script>
import DetailNavbar from 'views/detail/childDetail/DetailNavbar.vue'
import DetailSwiper from 'views/detail/childDetail/DetailSwiper.vue'
import DetailBaseInfo from 'views/detail/childDetail/DetailBaseInfo.vue'
import DetailShopInfo from 'views/detail/childDetail/DetailShopInfo.vue'
import DetailGoodsInfos from 'views/detail/childDetail/DetailGoodsInfos.vue'
import DetailParamInfo from 'views/detail/childDetail/DetailParamInfo.vue'
import DetailCommentInfo from 'views/detail/childDetail/DetailCommentInfo.vue'
import DetailRecommendInfo from 'views/detail/childDetail/DetailRecommendInfo.vue'

import Scroll from 'components/common/scroller/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import {getDetail,getRecommend,detailGoodsInfo,detailShopInfo,detailParams} from 'network/detail.js'

import {debounce} from 'common/utils/utils.js'
import {imgRefrashMixin} from 'common/mixins.js'

export default {
  name:'Detail',
  data(){
    return {
      detailid:null,
      topimg:[],
      detailgoods:{},
      detailshop:{},
      detailgoodsmore:{},
      detailparammore:{},
      detailcommentmore:{},
      detailrecommendmore:[],
      setofftop:0,
      isshow:false,
      isshowdetailnavbar:false,
      
    }
  },
  mixins:[imgRefrashMixin],
  components:{
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfos,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    Scroll,
    BackTop,
    GoodsList,
    
  },
  created(){
    this.detailid=this.$route.params.iid;
    //获取商品详情信息
    getDetail(this.detailid).then(res=>{
        console.log(res);
        //1获取轮播图数据
        const datas=res.result;
        this.topimg=datas.itemInfo.topImages;
        //2获取商品详情信息
        this.detailgoods=new detailGoodsInfo(datas.itemInfo,datas.columns,datas.shopInfo.services)
        //3获取商家信息
        this.detailshop=new detailShopInfo(datas.shopInfo);
        //4获取商品详情信息
        this.detailgoodsmore=datas.detailInfo;
        //5获取参数信息
        this.detailparammore=new detailParams(datas.itemParams.info,datas.itemParams.rule);
        //6获取评论信息
        if(datas.rate.cRate!==0){
          this.detailcommentmore=datas.rate.list[0];
        }
        
      })

      //获取商品推荐信息
      getRecommend().then(res=>{
        console.log("商品推荐信息");
        console.log(res);
        this.detailrecommendmore=res.data.list;
      })
  },
  mounted(){
    
  },
  destroyed(){
    //取消全局监听事件
    this.$bus.$off('loadimgmix',this.itemimgmix);
  },
  methods:{
    //监听详情的图片加载完成
    detailimgload(){
      // this.$refs.scrollback.scrollrefresh();
      //改用mixins混入刷新
      this.refresh();
    },
    backtopclick(){
      //封装了方法 
      this.$refs.scrollback.backtopscroll(0,0,500);
      //另一种方法，没有封装方法 ,scrollTo(x位置，y位置，花费时间)
      //this.$refs.scrollback.bs.scrollTo(0,0,500);
      console.log("返回顶部");
    },
    scrollpositiondetail(position){
      this.isshow=(-position.y)>1000?true:false;
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
  height: 1000px;
  overflow: hidden;
}
</style>