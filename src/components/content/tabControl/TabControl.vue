<template>
  <div class="tab-control">
    <div v-for="(items,index) in titles" 
         class="tab-control-item"
         :class="{active:index===currentindex}"
         @click="itemclick(index)">
      <span>{{items}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }  
  },
  data(){
    return{
      currentindex:0
    }
  },
  methods:{
    itemclick(index){
      this.currentindex=index;
      //将自己与外部联系，需要将自己的事件发出去
      this.$emit('tabcontrolclick',index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 44px;
  line-height: 35px;
  background-color: #fff;
  z-index: 9;
}
.tab-control-item{
  flex: 1;
}
.active{
  color: #ff5777;
}
.active span{
  border-bottom: 3px solid #ff8198;
}
.tab-control-item span{
 padding: 5px;
}
</style>