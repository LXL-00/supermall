<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data(){
    return{
      message:'',
      isshow:false
    }
  },
  methods:{
    showtoast(msg="默认提示",duration=2000){
      this.isshow=true;
      this.message=msg;
      
      setTimeout(()=>{
        this.isshow=false;
        this.message='';
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%); 
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0,0,0,0.75);
  /* //显示到最表面 */
  z-index: 999;
}
</style>