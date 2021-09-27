<template>
    <div class="goods-item" @click="itemClick">
        <img :src="showImage" alt="" @load="imgLoad">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        goodsitem:{
            type:Object,
            default:{}
        }
    },
    computed:{
        showImage(){
            return this.goodsitem.image || this.goodsitem.show.img
        }
    },
    methods:{
        itemClick(){
            this.$router.push('/detail/'+this.goodsitem.iid)
        },
        imgLoad(){
            this.$bus.emit("itemImageLoad")
        }
    }
}
</script>

<style scoped>
    .goods-item{
        float: left;
        width: 50%;
        text-align: center;
        padding: 5px;
        font-size: 13px;
    }
    .goods-item img{
        width: 100%;
        height: 277px;
        border-radius: 5px;
    }
    .goods-item p{
        height: 20px;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding-left: 10px;
    }
    .goods-item .price{
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .goods-item .cfav{
        position: relative;
    }
    .goods-item .cfav::before{
        content: "";
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url(../../../assets/img/home/collect.svg) 0 0/14px 14px;
    }
</style>