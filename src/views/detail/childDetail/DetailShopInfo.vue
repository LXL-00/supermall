<template>
  <div class="detail-shopinfo" v-if="Object.keys(detailshopinfos).length!==0">
    <div class="shop-name">
      <img v-lazy="detailshopinfos.logo" alt="">
      <span>{{detailshopinfos.name}}</span>
    </div>
    <div class="shop-other">
      <div class="shop-other-left">
        <div class="shop-sells">
          <p class="shop-sells-item1">{{detailshopinfos.sells|saveNum}}</p>
          <p class="shop-sells-item2">总销量</p>
        </div>
        <div class="shop-goods">
          <p class="shop-goods-item1">{{detailshopinfos.goodsCount}}</p>
          <p class="shop-goods-item2">全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-right">
        <div v-for="index in detailshopinfos.score.length" :key="index" class="shop-other-score">
          <span>{{detailshopinfos.score[index-1].name}}</span>
          <span class="shop-other-scorenum" :class="{'scorenum':detailshopinfos.score[index-1].isBetter}">
            {{detailshopinfos.score[index-1].score}}
          </span>
          <span class="shop-other-scorelogo" :class="{'scorelogo':detailshopinfos.score[index-1].isBetter}">
            {{detailshopinfos.score[index-1].isBetter ? '高' : '低'}}
          </span>
        </div>
      </div>
    </div>
    <div class="shop-shopping">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    detailshopinfos:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    saveNum(value){
      if(value<10000){
        return value;
      }
      else{
        return (value/10000).toFixed(1)+'万';
      }
    }
  },
}
</script>

<style scoped>
.shop-name{
  margin-top: 15px;
}
.shop-name img{
 width: 50px;
 height: 50px;
 border-radius: 100%;
 vertical-align: middle;
}
.shop-name span{
  font-size: 18px;
  margin-left: 10px;
}
.shop-other{
  display: flex;
  font-size: 16px;
}
.shop-other-left{
  flex: 1;
  display: flex;
  text-align: center;
  border-right: 1px solid rgb(230, 225, 225);
}
.shop-sells{
  flex:1;
}
.shop-sells-item1 {
  font-size: 25px;
  margin-bottom: -10px;
}
.shop-goods{
  flex: 1;
}
.shop-goods-item1{
  font-size: 25px;
  margin-bottom: -10px;
}
.shop-other-right{
  flex: 1;
  padding-top: 10px;
}
.shop-other-score{
  padding-left: 25px;
  padding-top: 5px;
}
.shop-other-score span{
  margin-right: 6px;
}
.shop-other-scorenum{
  display: inline-block;
  color: #006666;
  width: 35px;
}
.scorenum{
  color: #d6064b;
}
.shop-other-scorelogo{
  background-color: #006666;
  color: #fff;
  font-size: 12px;
  padding: 1px 3px;
}
.scorelogo{
  background-color:   #d6064b;
} 
.shop-shopping{
  text-align: center;
}
.shop-shopping div{
  display: inline-block;
	background-color: #f2f2f2;
	font-size: 14px;
	padding: 6px 30px;
	border-radius: 100px;
	margin: 10px;
}
</style>