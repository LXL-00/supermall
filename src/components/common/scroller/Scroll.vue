<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
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
  props:{
    ptype:{
      type:Number,
      default:0
    },
    pullup:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    backtopscroll(x,y,time=500){
      // this.$refs.bs(x,y,time);错的，应该是取bs这个对象，这个对象在data中已经定义了，直接this.bs
      this.bs && this.bs.scrollTo(x,y,time);
    },
    scrollfinishPullUp(){
      this.bs && this.bs.finishPullUp();
    },
    scrollrefresh(){
      this.bs && this.bs.refresh();
    },
    getscrolly(){
      return this.bs ? this.bs.y:0;
    }
  },
  mounted(){
    console.log(document.querySelector('.wrapper'));
    //用鼠标按着滚动才能实现
    this.bs=new BScroll(this.$refs.scroll,{
      //默认情况下bscroll是不会实时监听滚动位置的
      //probe：侦测
      //0,1：都是不侦测实时的位置
      //2：在手指滚动的过程中实时侦测，但是不会侦测手指离开后惯性滚动的位置
      //3：任何滚动的时候都侦测
      probeType:this.ptype,//根据需求决定要不要侦测位置
      click:true,
      //上拉加载更多
      pullUpLoad:this.pullup,//根据需求决定要不要上拉加载更多，默认是false不加载
    });
    //侦测滚动位置
    this.bs.on("scroll",(position)=>{
      //console.log(position);
      this.$emit("scrollposition",position);
    });
    this.bs.on("pullingUp",()=>{
      console.log("上拉加载更多");
      //实现了一次上拉加载更多后，要结束此操作(每隔两秒），以便实现下次继续上拉加载更多
      // setTimeout(()=>{
      //   this.bs.finishPullUp();
      // },2000)
      this.$emit("scrollpullup")
    });
  }
}
</script>

<style scoped>

</style>