<template>
  <div class="cart-bottombar">
    <div class="check-all">
      <check-button :ischeck="checkall" @click.native="checkallclick"></check-button>
      <span>全选</span>
    </div>
    
    <div class="compute-all">
         合计：
         <span>{{carttotalprice}}</span>
    </div>

    <div class="tocompute" @click="tocomputeall">
      去计算({{carttotallength}})
    </div>
    
    
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton.vue'


export default {
  name:'CartBottomBar',
  components:{
    CheckButton,
  },
  computed:{
    carttotalprice(){
      return '￥'+this.$store.state.cartlist.filter(item=>{
        return item.checked
      }).reduce((prevalue,item)=>{
        return prevalue+item.price*item.count
      },0).toFixed(2)
    },
    carttotallength(){
      return this.$store.state.cartlist.filter(item=>{
        return item.checked;
      }).length
    },
    checkall(){
      if(this.$store.state.cartlist.length==0){
        return false;
      }
      else{
        return !this.$store.state.cartlist.find(item=>!item.checked)
      }
    },
    
  },
  methods:{
    checkallclick(){
      console.log("点击了");
      if(this.checkall){
        //如果初始时，全部选中
        this.$store.state.cartlist.forEach(item => {
          item.checked=false;
        });
      }
      else{
        this.$store.state.cartlist.forEach(item => {
          item.checked=true;
        });
      }
    },
    tocomputeall(){
      if(!this.checkall){
        this.$toast.showtoast("请选择商品",1500)
      }
      else{
        this.$toast.showtoast("去计算",1500)
      }
    }
    
  }
}
</script>

<style scoped>
.cart-bottombar{
  height: 40px;
  background-color: rgb(238, 230, 230);
  position: relative;
  border-top: 1px solid rgb(189, 186, 186);
}
.check-all{
  display: flex;
  padding-top: 5px;
  padding-left: 5px;
  float: left;
}
.check-all span{
  padding-left: 5px;
}
.compute-all{
  float: left;
  margin-left: 10px;
  padding-top: 5px;
}
.compute-all span{
  color: #f3617c;
}
.tocompute{
  float: right;
  width: 90px;
  padding-top: 5px;
  height: 40px;
  text-align: center;
  background-color: rgb(245, 234, 81);
}
</style>