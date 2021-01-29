import {ADD_COUNTER,ADD_TO_CART} from './mutations-types.js'

export default{
  [ADD_COUNTER](state,oldproduct){
    oldproduct.count+=1;
  },
  [ADD_TO_CART](state,payload){
    state.cartlist.push(payload);
  }
}