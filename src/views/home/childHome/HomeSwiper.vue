<template>
  <div class="homeswiper">
    <swiper>
		  <swiper-item v-for="item in banners">
			  <a :href="item.link">
				  <img :src="item.image" @load="imgLoad">
			  </a>
		  </swiper-item>
	  </swiper>
  </div>

</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper/index';
	export default {
		name: 'HomeSwiper',
		props: {
			banners: {
				type: Array,
				default() {
					return []
				} 
			}
		},
		data(){
			return {
				isLoad: false
			}
		},
		components: {
			Swiper,
			SwiperItem 
		},
		methods: {
			imgLoad(){
				if(!this.isLoad){
					this.$emit('swiperImgLoad')
					this.isLoad = true
				}
			}
		}
	}
</script>

<style>
.homeswiper{
  width: 100%;
  /* height: 20px; */
}
</style>