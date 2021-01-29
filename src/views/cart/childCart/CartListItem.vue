<template>
  <div class="cart-listitem">
    <div class="cart-itemcheck">
      <check-button :ischeck="cartinfoitem.checked" @click.native="itemcheck"></check-button>
    </div>

    <div class="cart-itemimg">
      <img v-lazy="cartinfoitem.img">
    </div>

    <div class="cart-itemtext">
      <div class="cart-itemtitle">{{cartinfoitem.title}}</div>
      <div class="cart-itemdesc">{{cartinfoitem.desc}}</div>
      <div class="cart-itembottom">
        <div class="cart-itemprice">{{cartinfoitem.price}}</div>
        <div class="cart-itemcount">{{cartinfoitem.count}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton.vue'
export default {
  name:'CartListItem',
  props:{
    cartinfoitem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  components:{
    CheckButton,
  },
  methods:{
    itemcheck(){
      //使得在选中与不选中之间切换
      this.cartinfoitem.checked=!this.cartinfoitem.checked;
    }
  }
}
</script>

<style scoped>
.cart-listitem{
  display: flex;
  border-bottom: 1px solid rgb(230, 225, 225);
  padding-top: 10px;
}
.cart-itemcheck{
  width: 7%;
}
.cart-itemcheck input{
  padding-top: 10px;
}
.cart-itemimg{
  width: 25%;
  padding-right: 5px;
}
.cart-itemimg img{
  width: 100%;
  height: 100px;
}
.cart-itemtext{
  width: 68%;
}
/* 用css设置文字多余部分显示省略号 ,只显示一行*/
.cart-itemtitle{
  overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
  font-size: 17px;
}
.cart-itemdesc{
  overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
  font-size: 14px;
  color: rgb(99, 96, 96);
  padding-top: 4px;
}
.cart-itembottom{
  position: relative;
  padding-top: 30px;
}
.cart-itemprice{
  float: left;
  font-size: 17px;
  color:  #ff8198;
}
.cart-itemprice::before{
		content: '￥';
}
.cart-itemcount{
  float: right;
}
.cart-itemcount::before{
		content: 'X';
    font-size: 10px;
}
</style>