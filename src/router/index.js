
//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载

const Home=() => import('views/home/Home.vue')
const Category=() => import('views/category/Category.vue')
const Cart=() => import('views/cart/Cart.vue')
const Profile=() => import('views/profile/Profile.vue')
const Detail=() => import('views/detail/Detail.vue')
//安装插件
Vue.use(VueRouter)

//配置路由映射关系
const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

//配置路由对象
const router=new VueRouter({
  routes,
  //将默认的Hash模式，改成html5的history模式
  mode:'history'
})

export default router
