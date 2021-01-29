<template>
  <div class="detail-goodsinfos" v-if="Object.keys(detailinfos).length!==0">
    <div class="detail-goodsdesc">{{detailinfos.desc}}</div>
    <div class="detail-goodsimg" v-for="items in detailinfos.detailImage">
      <p class="detail-goodskey">{{items.key}}</p>
      <div class="detail-goodslist" v-for="(itemsimg,index) in items.list" :key="index">
        <img v-lazy="itemsimg" alt="" @load="goodsimgload">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfos',
  props:{
    detailinfos:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return{
      counter:0,
      imglength:0,
    }
  },
  methods:{
    goodsimgload(){
      //监听详情的图片加载完成
      this.$emit('imgloadtodetail')
    //   if(++this.counter==this.imglength){
        
    //   }
    },
  },
  watch:{
    // detailinfowatch(){
    //   this.imlength=this.detailinfos.detailImage[0].list.length;
    // }
  }
}
</script>

<style scoped>
.detail-goodsdesc{
  margin-top: 30px;
  padding-top: 10px;
  border-top: 2px solid rgb(230, 225, 225);
  font-size: 16px;
  line-height: 25px;
}
.detail-goodskey{
  border-top: 1px solid rgb(230, 225, 225);
  font-size: 16px;
  line-height: 25px;
  padding-left: 10px;
  padding-top: 10px;
}
.detail-goodslist img{
  width: 100%;
}
</style>