<template>
  <div id="app">
    <!-- 占位，显示相应路由的页面 -->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/tabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "/assets/css/base.css"
</style>
