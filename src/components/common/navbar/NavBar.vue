<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  /* box-shadow: 阴影水平偏移值 阴影垂直偏移值 阴影模糊值 颜色; */
  box-shadow: 0px 1px 1px rgb(100,100,100,0.2);
}
.left{
  width: 60px;
}
.right{
  width:60px;
}
.center{
  flex: 1;
}
</style>