<template>
  <div class="detail-recommendinfo" v-if="Object.keys(detailrecommendinfos).length !== 0">
    <div class="detail-goods-list" v-for="(item,index) in detailrecommendinfos" :key="index">
		  <img v-lazy="item.image" class="detailgoods-list-img">
		  <div class="detailgoods-list-text">
			  <div class="detailgoods-list-title">{{item.title}}</div>
			  <div class="detailgoods-list-price">
				  <div class="price">{{item.price}}</div>
				<div class="collect"><span>{{item.cfav}}</span></div>
			</div>
		</div>
    
  </div>

    
	</div>
</template>

<script>
export default {
  name:'DetailRecommendInfo',
  props:{
    detailrecommendinfos:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
			// loadimg(){
			// 	//当孙子组件想要与父组件进行通信的话，可以使用事件总线方法，将孙子组件的时间发出$bus.$emit到父组件中
			// 	this.$bus.$emit("loadimgdetail");
			// },
			// goodsitemclick(){
			// 	console.log("详情页跳转");
			// 	this.$router.push('/detail/'+this.detailrecommendinfos.iid);
			// }
	},
}
</script>

<style scoped>
.detail-recommendinfo{
  display:flex;
  /* 将图片自动包裹在浏览器中 */
  flex-wrap: wrap;
  /* 将图片位置均等分 */
  justify-content: space-around;
  padding: 2px;
}
.detail-goods-list{
		/* margin-bottom: 40px; */
		position: relative;
		width: 48%;
	}
	.detailgoods-list-img{
		width: 100%;
		height: 80%;
		border-radius: 5px;
	}
	.detailgoods-list-text{
		font-size: 14px;
		/* position: absolute; */
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}
	/* 用css设置文字多余部分显示省略号 ,只显示一行*/
	.detailgoods-list-title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.detailgoods-list-price{
		font-size: 15px;
		position: relative;
	}
	.price{
		position: absolute;
		color:  #ff8198;
	}
	.price::before{
		content: '￥';
	}
	.collect::before{
		content: '';
		display: inline-block;
		height: 14px;
		width: 14px;
		background: url(~assets/img/home/collect_icon.png) no-repeat center;
		background-size: cover;
	}
</style>