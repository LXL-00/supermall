<template>
  <div id="detail">
    <detail-navbar class="detailnavbar" ref="detailnavbarref" @titleitemtodetail="detailnavclick"></detail-navbar>
    
    <scroll class="detailscroll" 
            ref="scrollback" 
            :ptype="3" 
            @scrollposition="scrollpositiondetail"
            :pullup="true"
            @scrollpullup="scrollpullupdetail">
      
      <detail-swiper :topimgswiper="topimg"></detail-swiper>
      <detail-base-info :detailbaseinfogoods="detailgoods"></detail-base-info>
      <detail-shop-info :detailshopinfos="detailshop"></detail-shop-info>
      <detail-goods-infos :detailinfos="detailgoodsmore" @imgloadtodetail="detailimgload"></detail-goods-infos>
      <detail-param-info :detailparaminfos="detailparammore" ref="paramref"></detail-param-info>
      <detail-comment-info :detailcommentinfos="detailcommentmore" ref="commentref"></detail-comment-info>
      <!-- <detail-recommend-info :detailrecommendinfos="detailrecommendmore"></detail-recommend-info> -->
      <goods-list :goods="detailrecommendmore" ref="recommendref" class="goodslist"></goods-list>

    </scroll>
    <detail-bottom-bar @carttodetail="detailcartclick"></detail-bottom-bar>
    <back-top @click.native="backtopclick" v-show="isshow"></back-top>
    <!-- <toast :message="messagedetail" :isshow="isshowdetail"></toast> -->
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
import DetailBottomBar from 'views/detail/childDetail/DetailBottomBar.vue'

import Scroll from 'components/common/scroller/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
// import Toast from 'components/common/toast/Toast.vue'

import {getDetail,getRecommend,detailGoodsInfo,detailShopInfo,detailParams} from 'network/detail.js'

import {debounce} from 'common/utils/utils.js'
import {imgRefrashMixin,backtopMixins} from 'common/mixins.js'

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
      currenttopys:[],
      currenttopysfun:null,
      detailcurrentindex:0,
      // messagedetail:'',
      // isshowdetail:false,
      
    }
  },
  mixins:[imgRefrashMixin,backtopMixins],
  components:{
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfos,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast,
    
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
        //4获取商品展示详情信息
        this.detailgoodsmore=datas.detailInfo;
        //5获取参数信息
        this.detailparammore=new detailParams(datas.itemParams.info,datas.itemParams.rule);
        //6获取评论信息
        if(datas.rate.cRate!==0){
          this.detailcommentmore=datas.rate.list[0];
        }
        
      });

      //获取商品推荐信息
      getRecommend().then(res=>{
        console.log("商品推荐信息");
        console.log(res);
        this.detailrecommendmore=res.data.list;
      });

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
      // console.log('------');
      // this.$refs.scrollback.scrollrefresh();
      //改用混入mixins
      this.refresh();
  
      this.currenttopysfun=debounce(()=>{
        this.currenttopys=[];
        this.currenttopys.push(0);
        this.currenttopys.push(this.$refs.paramref.$el.offsetTop);
        this.currenttopys.push(this.$refs.commentref.$el.offsetTop);
        this.currenttopys.push(this.$refs.recommendref.$el.offsetTop);
        //在最后加个最大值，为了之后scrollpositiondetail函数里方便
        this.currenttopys.push(Number.MAX_VALUE);
        // console.log('打印各组件y值');
        // console.log(this.currenttopys);
      },500) 
      
      this.currenttopysfun();
    },
    detailnavclick(index){
      console.log(index);
      // this.$refs.scrollback.bs.scrollTo(0,-this.currenttopys[index],100);
      this.$refs.scrollback.backtopscroll(0,-this.currenttopys[index],100);
    },
    scrollpositiondetail(position){
      const py=-position.y;
      this.isshow=(py)>1000?true:false;
      
      //监听滚动位置，navbar变为相应标题
      // if(py>this.currenttopys[0] && py<this.currenttopys[1]){
      //   this.$refs.detailnavbarref.currentindex=0;
      // }
      // else if(py>=this.currenttopys[1] && py<this.currenttopys[2]){
      //   this.$refs.detailnavbarref.currentindex=1;
      // }
      // else if(py>=this.currenttopys[2] && py<this.currenttopys[3]){
      //   this.$refs.detailnavbarref.currentindex=2;
      // }
      // else if(py>=this.currenttopys[3]){
      //   this.$refs.detailnavbarref.currentindex=3;
      // }

      //换成以下方法
      let len=this.currenttopys.length;
      for(let i=0;i<len-1;i++){
        if((this.detailcurrentindex!==i) && (py>=this.currenttopys[i] && py<this.currenttopys[i+1])){
          this.detailcurrentindex=i;
          this.$refs.detailnavbarref.currentindex=this.detailcurrentindex;
        }
      }
      
    },
    scrollpullupdetail(){
      console.log("上拉加载更多");
      //需要加载更多的时候，图片传进来需要时间，当图片没有完全传进来的时候，当前的整个height高度并不是图片完全加载好了的高度，所以要刷新确保图片全部加载进来了，得到正确的高度
      setTimeout(()=>{
        this.$refs.scrollback.scrollrefresh();
      },1000);
    },

    detailcartclick(){
      let cartinfo={};
      cartinfo.id=this.detailid;
      cartinfo.img=this.topimg[0];
      cartinfo.desc=this.detailgoods.desc;
      cartinfo.price=this.detailgoods.realPrice;
      cartinfo.title=this.detailgoods.title;

      //将商品的信息添加到购物车中
      //将这些用Vuex进行状态管理，提交到store中
      // this.$store.commit('addcart',cartinfo);
      //先dispatch到action，实现异步，然后在action中commit到mutation中，实现跟踪
      this.$store.dispatch('addcart_a',cartinfo).then(res=>{
        console.log(res);
        // // alert(res);
        
        this.$toast.showtoast(res,1500)
        
      });
    }
   
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 1;
  background-color: #fff;
  /* height: 100%; */
  height: 100vh;
}
.detailnavbarref{
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.detailscroll{
  height: calc(100% - 44px - 55px);
  /* height: 1000px; */
  overflow: hidden;
}

</style>