//最终管理各个模块请求
import axios from 'axios'


export function request(config){
  //1.创建网络请求axios实例
  const instance1=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //2.拦截器
  //2.1网络请求拦截器
  instance1.interceptors.request.use(config=>{
    return config;
  },err=>{
    console.log(err);
  })
  //2.2响应拦截器
  instance1.interceptors.response.use(res=>{
    return res.data;
  },err=>{
    console.log(err);
  })

  //3.发送真正的网络请求，直接返回，会自动调用Promise
  return instance1(config)
}
