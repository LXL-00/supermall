<template>
  <div class="goods-list">   
    <goods-list-item v-for="item in goods" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem.vue'

export default {
  name:"GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list{
  display:flex;
  /* 将图片自动包裹在浏览器中 */
  flex-wrap: wrap;
  /* 将图片位置均等分 */
  justify-content: space-around;
  padding: 2px;

}
</style>