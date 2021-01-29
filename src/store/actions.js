import {ADD_COUNTER,ADD_TO_CART} from './mutations-types.js'

export default {
  // 传进来的商品信息，需要对商品进行处理，即是否是同一商品，还是不同商品，以此来计算各商品数量
  addcart_a(context,payload){
    //方法1：for 循环购物车列表
    // let oldproduct=null;
    // for(let item of state.cartlist){
    //   if(item.id==payload.id){
    //     oldproduct=item;
    //   }
    // }
    // if(oldproduct){
    //   oldproduct.count+=1;
    // }else{
    //   payload.count=1;
    //   state.cartlist.push(payload);
    // }

    //方法二：使用数组中的find（）方法
    return new Promise((resolve,reject)=>{
      let oldproduct=context.state.cartlist.find(item=>{
        return item.id==payload.id;
      })
      if(oldproduct){
        context.commit(ADD_COUNTER,oldproduct);
        resolve('购物车商品数量加1');
      }
      else{
        payload.count=1;
        payload.checked=true;
        context.commit(ADD_TO_CART,payload);
        resolve('购物车增加新的商品');
      }
    })
    
  }
}