<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/home.js'
export default {
  name:'Home',
  data(){
    return{
      barnners:[],
      recommands:[]
    }
  },
  components:{
    NavBar
  },
  create(){
    getHomeMultidata().then(res=>{
      console.log(res);
      //1.请求多个数据
      this.barnners=res.data.barnner.list;
      this.recommands=res.data.recommand.list;
    })
  }
}
</script>
<style scoped>
.home-nav{
  margin-top: -10px;
  margin-left: -8px;
  margin-right: -8px;
  background-color:  #ff8198;
  color:white;
  
}
</style>