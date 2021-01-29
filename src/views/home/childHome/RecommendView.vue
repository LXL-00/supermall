<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img v-lazy="item.image">
        <div class="texttitle">{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name:"RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 5px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 75%;
  height: 80%;
}
.recommend-item a{
  text-decoration: none;
  color: black;
}
.texttitle{
  font-size: 16px;
}
</style>