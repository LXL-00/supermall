<template>
  <div class="detail-paraminfo" v-if="Object.keys(detailparaminfos).length!==0">
    <div class="detail-infos">
      <p class="detail-infokey">{{detailparaminfos.infokey}}</p>
      <div class="setinfo">
        <div class="detail-infoset" v-for="(setitem,setindex) in detailparaminfos.infoset" :key="setindex">
          <div class="setkey">{{setitem.key}}</div>
          <div class="setvalue">{{setitem.value}}</div>
        </div>
      </div>
      
    </div>
    <div class="detail-rules">
      <p class="detail-rulekey">{{detailparaminfos.rulekey}}</p>
      <div class="detail-ruletable" v-for="(tableitem,tableindex) in detailparaminfos.ruletable" :key="tableindex">
        <!-- <table class="tablerule" v-for="(tbrule,index) in detailparaminfos.ruletable" :key="index">
          <tr v-for="(trrule,trindex) in tbrule" :key="trindex">
            <td v-for="(tdrule,tdrule) in trrule" :key="tdindex">{{tdrule}}</td>
          </tr>
        </table> -->
        <div class="tablelist" v-for="(tblist,tbindex) in tableitem">
          <div v-for="(listitem,listindex) in tblist">{{listitem}}</div>
        </div>
      </div>
      <p class="detail-ruledisc">{{detailparaminfos.ruledisc}}</p>
    </div>
    <div class="detail-infoimg" v-if="detailparaminfos.infoimg.length!==0">
      <div v-for="(imgitem,indeximg) in detailparaminfos.infoimg">
        <img :src="imgitem" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailParamInfo',
  props:{
    detailparaminfos:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-infokey{
  border-top: 1px solid rgb(230, 225, 225);
  font-size: 16px;
  line-height: 25px;
  padding-left: 10px;
  padding-top: 10px;
}
.setinfo{
  border :1px solid rgb(184, 182, 182);
}
.detail-infoset{
  display: flex;
}
.setkey{
  /* flex: 1; */
  width: 20%;
  border-right: 1px solid rgb(184, 182, 182);
  border-bottom: 1px solid rgb(184, 182, 182);
  padding-left: 5px;
}
.setvalue{
  /* flex: 1; */
   width: 80%;
  padding-left: 5px;
  border-bottom: 1px solid rgb(184, 182, 182);
}
.detail-infoimg{
  margin-top: 10px;
}
.detail-infoimg img{
  width: 100%;
}
.detail-ruledisc{
  font-size: 14px;
  line-height: 25px;
  color:  #ff5777;
}
.detail-rulekey{
  font-size: 16px;
  line-height: 25px;
  padding-left: 10px;
}
.detail-ruletable{
  display: flex;
  border: 1px solid rgb(184, 182, 182);
}
.tablelist{
  flex: 1;
}

</style>