import {send} from './request'

export function getDetail(iid){
    return send({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return send({
        url:'/recommend'
    })
}

export class Detail{
    constructor (itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class ShopInfo{
    constructor (shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}