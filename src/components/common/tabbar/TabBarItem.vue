
<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
    
       
</template>

<script>
export default {
  name:'TabBarItem',
  //要确定跳转到哪个路由，不能写死，所有要让别人传进来
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed:{
    isActive(){
      //要动态的显示相应活跃的按钮，所有要用computed属性，indexOf()->查看是否有相应路径
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      //先isActive请求下，看相应的路由是否处于活跃状态，若为true则用color：this.activeColor,否则为{}这个空的对象
      return this.isActive?{color:this.activeColor} : {}
    }
  },
  methods:{
    itemclick(){
      console.log(this.path);
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  margin-top: 5px;
  font-size: 14px;
}

.tab-bar-item img{
  width:35px;
  height: 30px;
  margin-bottom: -5px;
}
/* .active{
  color:red;
} */
</style>