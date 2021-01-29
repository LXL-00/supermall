<template>
  <div v-if="Object.keys(detailbaseinfogoods).length !== 0" class="detail-baseinfo">
    <div class="info-title">{{detailbaseinfogoods.title}}</div>
    <div class="info-price">
      <div class="new-price">{{detailbaseinfogoods.newPrice}}</div>
      <div class="old-price">{{detailbaseinfogoods.oldPrice}}</div>
      <div class="discount" v-if="detailbaseinfogoods.discount">{{detailbaseinfogoods.discount}}</div>
    </div>
    <div class="info-other">
      <span>{{detailbaseinfogoods.columns[0]}}</span>
      <span>{{detailbaseinfogoods.columns[1]}}</span>
      <span>{{detailbaseinfogoods.services[detailbaseinfogoods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" 
            v-for="index in detailbaseinfogoods.services.length-1"
            :key="index">
            <img v-lazy="detailbaseinfogoods.services[index-1].icon">
            <span>{{detailbaseinfogoods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props:{
    detailbaseinfogoods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.info-title{
  font-size: 16px;
  margin: 5px 0;
  padding: 0 5px;
  line-height: 20px;
}
.info-price{
  display: flex;
  /* border-bottom: 1px solid rgb(230, 225, 225); */
}
.new-price{
  padding-left: 5px;
  padding-right: 6px;
  font-size: 18px;
  color:#ff5777;
}
.old-price{
  padding-top: 6px;
  font-size: 11px;
  color: rgb(131, 128, 128);
  text-decoration: line-through;
}
.discount{
  margin-left: 10px;
  margin-bottom: 5px;
  padding:0 7px;
  font-size: 16px;
  color: white;
  background-color:#ff5777 ;
  border-radius: 9px;
}
.info-other{
  display: flex;
  font-size: 14px;
  color: rgb(90, 88, 88);
  margin: 8px 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(230, 225, 225);
}
.info-other span{
  flex: 1;
}
.info-service{
  display: flex;
  font-size: 15px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgb(230, 225, 225);
}
.info-service-item{
  flex: 1;
}
.info-service-item img{
  width: 14px;
  height: 14px;
}
</style>