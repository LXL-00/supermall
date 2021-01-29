<template>
  <div class="cart">
    <nav-bar class="cart_navbar">
      <div class="cart_navbarcenter" slot="center">购物车({{cartlength}})</div>
    </nav-bar>

    <cart-list class="cart-listcontent"></cart-list>
    
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import CartList from 'views/cart/childCart/CartList.vue'
import CartBottomBar from 'views/cart/childCart/CartBottomBar.vue'

//mapGetters函数仅仅将store中的getters中的方法映射到局部计算属性
import {mapGetters} from 'vuex'

export default {
  name:'Cart',
  data(){
    return {
      
    }
  },
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters([
      'cartlength',
      'cartcontent'
    ])
  },
  methods:{
    // cartcomputeall(){
    //   this.$toast.showtoast("去计算",1500)
    // }
  }

}
</script>
<style scoped>
.cart{
  height: 100vh;
}
.cart_navbar{
  background-color:  #ff8198;
  color:white;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; 
}
.cart-listcontent{
  margin-top: 50px;
}
</style>