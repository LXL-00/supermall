import {request} from 'network/request.js'

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class detailGoodsInfo{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.newPrice=itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.columns=columns;
    this.services=services;
    this.realPrice=itemInfo.lowNowPrice;
  }
}

export class detailShopInfo{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods;
  }
}

export class detailParams{
  constructor(info,rule){
    this.infoimg=info.images?info.images:'';
    this.infokey=info.key;
    this.infoset=info.set;
    this.ruledisc=rule.disclaimer;
    this.rulekey=rule.key;
    this.ruletable=rule.tables;
  }
}