<template>
  <div class="detail-swiper">
    <swiper class="detail-swiperitem">
      <swiper-item v-for="items in topimgswiper">
        <img v-lazy="items" alt="" @load="swiperimgLoad">
      </swiper-item>
    </swiper>
    
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index';
export default {
  name:'DetailSwiper',
  props:{
    topimgswiper:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
			return {
				isLoad: false
			}
	},
  components:{
    Swiper,
    SwiperItem
  },
  methods: {
			swiperimgLoad(){
				if(!this.isLoad){
					this.$emit('swiperimgloadtodetail')
					this.isLoad = true
				}
			}
	}
}
</script>

<style scoped>
.detail-swiper{
  height: 220px;
  width: 100%;
  
}
.detail-swiperitem img{
  height: 220px;
  width: 100%;
  overflow: hidden;
}
</style>