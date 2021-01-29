import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

//1.引入插件
Vue.use(Vuex)

const state={
  cartlist:[],
}
//2.创建store对象
const store=new Vuex.Store({
  state,
  //在mutations里面管理Vuex中的状态，当从其他组件中commit提交状态给store后，store里在mutations对状态进行管理
  mutations,
  actions,
  getters,
  
})

//挂载到vue实例上
export default store