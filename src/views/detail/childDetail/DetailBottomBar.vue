<template>
  <div class="detail-bottombar">
    <div class="kefu">
      <img src="~assets/img/detail/icon01.png">
      <div>客服</div>
    </div>

    <div class="store">
      <img src="~assets/img/detail/icon02.png">
      <div>店铺</div>
    </div>

    <div class="collect">
      <img src="~assets/img/detail/icon03.png">
      <div>收藏</div>
    </div>

    <div class="cart" @click="detailcart">
      加入购物车
    </div>

    <div class="buy">
      购买
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods:{
    detailcart(){
      this.$emit('carttodetail');
    }
  }
}
</script>

<style scoped>
.detail-bottombar{
  height: 55px;
  background: #fff;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid rgb(150, 148, 148);
  
}
.kefu{
  flex: 1;
  text-align: center;
  font-size: 14px;
  padding-top: 2px;
} 
.store{
  flex: 1;
  text-align: center;
  font-size: 14px;
  padding-top: 2px;
} 
.collect{
  flex: 1;
  text-align: center;
  font-size: 14px;
  padding-top: 2px;
} 
img{
  width:33px;
  height: 29px;
} 
.cart{
  flex: 1;
  text-align: center;
  font-size: 14px;
  background-color: rgb(245, 234, 81);
  padding-top: 17px;
  
} 
.buy{
  flex: 1;
  text-align: center;
  font-size: 14px;
  background-color:#ef4562;
  padding-top: 17px;
  color: white;
} 
</style>