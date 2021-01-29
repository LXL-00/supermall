<template>
	<div class="goods-list-item" @click="goodsitemclick">
		<img v-lazy="showimages" class="goods-list-img" @load="loadimg">
		<div class="goods-list-text">
			<div class="goods-list-title">{{goodsItem.title}}</div>
			<div class="goods-list-price">
				<div class="price">{{goodsItem.price}}</div>
				<div class="collect"><span>{{goodsItem.cfav}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsListItem',
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		computed:{
			showimages(){
				return this.goodsItem.image || this.goodsItem.show.img;
			}
		},
		methods:{
			loadimg(){
				//当孙子组件想要与父组件进行通信的话，可以使用事件总线方法，将孙子组件的时间发出$bus.$emit到父组件中
				this.$bus.$emit("loadimgmix");
			},
			goodsitemclick(){
				console.log("详情页跳转");
				this.$router.push('/detail/'+this.goodsItem.iid);
			}
		}
		
	}
</script>

<style scoped>
	.goods-list-item{
		/* margin-bottom: 40px; */
		position: relative;
		width: 48%;
	}
	.goods-list-img{
		width: 100%;
		height: 80%;
		border-radius: 5px;
	}
	.goods-list-text{
		font-size: 14px;
		/* position: absolute; */
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}
	/* 用css设置文字多余部分显示省略号 ,只显示一行*/
	.goods-list-title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.goods-list-price{
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