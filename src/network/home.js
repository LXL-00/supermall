//这个文件封装所有对首页请求的
//因为request.js里的request不是设置为默认的，所以要import{}
import {request} from 'network/request.js'

//根据request里设置的进行传，request里只有一个config参数，即{}一个对象
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
