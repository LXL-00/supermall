<template>
  <div class="detail-commentinfo" v-if="Object.keys(detailcommentinfos).length!==0">
    <div class="comenttitle">
      <span class="commentuer">用户评价</span>
      <span class="commentmore"> 更多</span>
    </div>

    <div class="commentusers">
      <img class="cuserimg" v-lazy="detailcommentinfos.user.avatar" alt="">
      <span class="cusername">{{detailcommentinfos.user.uname}}</span>
    </div>

    <div class="commentcontents">
      <div class="ccreated">
        <span class="ctime">{{detailcommentinfos.created |showdate}}</span>
        <span class="cstyle">{{detailcommentinfos.style}}</span>
      </div>
      <div class="ccontents">{{detailcommentinfos.content}}</div>
      <div class="cimages">
        <div class="cimg" v-for="(imgitem,index) in detailcommentinfos.images" :key="index">
          <img v-lazy="imgitem">
        </div>
      </div>
      <div class="canswer">{{detailcommentinfos.explain}}</div>
    </div>

  </div>
</template>

<script>
import {formatDate} from 'common/utils/utils.js'
export default {
  name:'DetailCommentInfo',
  props:{
    detailcommentinfos:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showdate(value){
      //1.将时间戳转换成date对象
      const date=new Date(value*1000);
      //2.将date进行格式化
      //y->年  M->月  d->日  h->小时   m->分钟  s->秒
      return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.comenttitle{
  display: flex;
  margin-top: 20px;
  font-size: 16px;
  padding: 10px 0;
  border-top: 1px solid rgb(230, 225, 225);
  border-bottom: 1px solid rgb(230, 225, 225);
}
.commentuer{
  width: 85%;
}
.commentmore{
  width: 15%;
}
.commentusers{
  margin-top: 15px;
}
.cuserimg{
 width: 50px;
 height: 50px;
 border-radius: 100%;
 vertical-align: middle;
}
.cusername{
  font-size: 18px;
  margin-left: 10px;
}
.ccreated{
  color: rgb(99, 96, 96);
  margin: 5px 0;
}
.ctime{
  border-right: 1px solid rgb(99, 96, 96);
  padding-right: 10px;
}
.cstyle{
  padding-left: 10px;
}
.ccontents{
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
}
.cimages{
  display: flex;
}
.cimg{
  width: 50%;
}
.cimg img{
  width: 100%;
  height: 100%;
  border-radius: 5%;
}
.canswer{
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
  background-color:  rgb(240, 236, 236);
  border-radius: 5%;
  padding-left: 5px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(230, 225, 225);
}
</style>