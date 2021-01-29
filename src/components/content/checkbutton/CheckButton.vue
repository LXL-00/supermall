<template>
  <div class="check-button" :class="{check:ischeck}">
    <img src="~assets/img/detail/check_active.png" v-show="ischeck">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
    ischeck:{
      type:Boolean,
      default:false
    },
    
  },
}
</script>

<style scoped>
.check-button{
  border: 0.1px solid #ff8198;
  border-radius: 100%;
  width: 20px;
  height: 20px;
}
.check-button img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
  padding-bottom: 8px;
}
.check{
  border-color: #d60629;
}
</style>