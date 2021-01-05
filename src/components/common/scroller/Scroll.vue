<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot class="detail"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"Scroll",
  data(){
    return{
      bs:null
    }
  },
  mounted(){
    console.log(document.querySelector('.wrapper'));
    //用鼠标按着滚动才能实现
    this.bs=new BScroll(document.querySelector('.wrapper'),{
      //默认情况下bscroll是不会实时监听滚动位置的
      //probe：侦测
      //0,1：都是不侦测实时的位置
      //2：在手指滚动的过程中实时侦测，但是不会侦测手指离开后惯性滚动的位置
      //3：任何滚动的时候都侦测
      probeType:3,
      click:true,
      //上拉加载更多
      pullUpLoad:true
    });
    //侦测滚动位置
    this.bs.on("scroll",(position)=>{
      console.log(position);
    });
    this.bs.on("pullingUp",()=>{
      console.log("上拉加载更多");
      //实现了一次上拉加载更多后，要结束此操作(每隔两秒），以便实现下次继续上拉加载更多
      setTimeout(()=>{
        this.bs.finishPullUp();
      },2000)
    });
  }
}
</script>

<style scoped>
.wrapper{
  height: 960px;
  /* background-color: burlywood; */
  overflow: hidden;
  /* overflow-y: scroll;  //这是原生代码实现纵向滚动*/
  margin-top: 44px;
  margin-bottom: 50px;
}
</style>