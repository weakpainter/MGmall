<template>
    <div v-if="Object.keys(goods).length !== 0" class="goods-detail">
        <div class="goods-title">
            {{goods.title}}
        </div>
        <div class="goods-price">
            <span class="new-price">{{goods.newPrice}}</span>
            <span class="old-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="goods-columns">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="goods-services">
            <span v-for="index in goods.services.length-1" :key="index" class="services-item">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type:Object,
            default(){
                return null
            }
        }
    }
}
</script>

<style scoped>
    .goods-detail{
        margin-top: 10px;
    }
    .goods-detail .goods-title{
        padding: 12px;
        font-size: 20px;
    }
    .goods-detail .goods-price{
        margin-top: 10px;
    }
    .goods-detail .goods-price span{
        margin: 10px;
    }
    .goods-detail .goods-price .new-price{
        font-size: 25px;
        color: var(--color-high-text);
    }
    .goods-detail .goods-price .old-price{
        text-decoration:line-through;
        color:#999;
    }
    .goods-detail .goods-price .discount{
        display: inline-block;
        width: 70px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 10px;
        position: relative;
        top: -10px;
        background: var(--color-high-text);
        color: #fff;
    }

    .goods-detail .goods-columns{
        margin: 30px 10px 0 10px;
        height: 30px;
        color: #999;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(100,100,100,.1);
    }
    .goods-detail .goods-services{
        padding: 20px 0;
        display: flex;
        border-bottom: 5px solid rgba(243, 241, 241, 0.849);
    }
    .goods-detail .goods-services .services-item{
        flex: 1;
        margin-left: 5px;
    }
    .goods-detail .goods-services .services-item img{
        width: 15px;
        height: 15px;
    }
</style>