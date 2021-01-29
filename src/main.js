import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import toast from './components/common/toast/index'
import FastClick from 'fastclick'
import VueLasyLoad from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue();
Vue.use(toast);

//解决移动端300ms延迟
FastClick.attach(document.body);

//使用图片懒加载
Vue.use(VueLasyLoad,{
  loading:require('./assets/img/common/loading.png')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
