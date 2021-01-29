<template>
  <div class="cart-list">
    <scroll class="cartscroll" 
            ref="scrollback" 
            :ptype="3" 
            @scrollposition="scrollpositioncart"
            :pullup="true"
            @scrollpullup="scrollpullupcart">
      
      <cart-list-item v-for="(item,index) in cartcontent" 
                      :key="index" 
                      :cartinfoitem="item"></cart-list-item>
    </scroll>
    <back-top @click.native="backtopclick" v-show="isshow"></back-top>
    
  </div>
</template>

<script>
import CartListItem from 'views/cart/childCart/CartListItem.vue'
import Scroll from 'components/common/scroller/Scroll.vue'

import { mapGetters } from 'vuex'

import {imgRefrashMixin,backtopMixins} from 'common/mixins.js'

export default {
  name:'CartList',
  data(){
    return{
      isshow:false,
    }
  },
  mixins:[imgRefrashMixin,backtopMixins],
  components:{
    CartListItem,
    Scroll
  },
  computed:{
    ...mapGetters(['cartcontent'])
  },
  methods:{
    scrollpositioncart(position){
      const py=-position.y;
      this.isshow=(py)>100?true:false;
    },
    scrollpullupcart(){
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
.cart-list{
  height: calc(100% - 44px - 54px - 40px);
}
.cartscroll{
  height: 100%;
  overflow: hidden;
}
</style>