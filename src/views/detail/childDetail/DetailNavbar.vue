<template>
  <div id="detail-nav-bar">
      <nav-bar>
        <div slot="left" class="detailback" @click="detailbackclick">
          <img src="~assets/img/common/back.svg" alt="返回上一页面">
        </div>
        <div slot="center" class="detailitem">
          <div class="titleitem" 
               v-for="(items,index) in detailtitles"
               :class="{active:index===currentindex}"
               @click="titleitemclick(index)">
            {{items}}
          </div>  
        </div>
      </nav-bar>
    </div>
    
  </div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:"DetailNavbar",
  data(){
    return{
      detailtitles:['商品','参数','评论','推荐'],
      currentindex:0,
    }
  },
  components:{
    NavBar,
  },
  methods:{
    titleitemclick(index){
      this.currentindex=index;
    },
    detailbackclick(){
      this.$router.back();
      // //以下方法同样作用
      // this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.detailitem{
  display: flex;
}
.titleitem{
  flex: 1;
  font-size: 14px;
}
.active{
 color:  #ff5777;
}
.detailback img{
  width: 20px;
  height: 20px;
  padding-top: 12px;
}
</style>