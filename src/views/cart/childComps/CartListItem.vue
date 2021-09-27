<template>
    <div class="itemInfo">
        <div class="button" @click="active" >
            <check-button  :isChecked="product.checked" @click.native="changeChecked"/>
        </div>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-content">
            <div class="item-title">{{product.title}}</div>
            <p class="item-desc">{{product.desc}}</p>
            <div class="item-price">
                <span class="price">￥{{product.price}}</span>
                <span>x{{product.count}}</span>
            </div>
            
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
    components: { CheckButton },
    name:"CartListItem",
    props:{
        product:{
            type: Object,
            default:()=>{
                return {}
            }
        }
    },
    methods:{
        changeChecked(){
            this.product.checked = !this.product.checked
        }
    }
}
</script>

<style scoped>
    .itemInfo{
        width: 100%;
        padding: 5px;
        border-bottom: 2px solid #ccc;
        display: flex;
    }
    .itemInfo .item-img img{
        width: 95px;
        height: 130px;
        border-radius: 10px;
    }
    .itemInfo .item-content{
        flex: 1;
        padding: 0 10px;
        overflow: hidden;
    }
    .itemInfo .item-content .item-title{
        font-weight: 700;
        margin-bottom: 15px;
    }
    .itemInfo .item-content .item-desc{
        font-size: 14px;
    }
    .item-title, .item-desc{
        /* width: 235px;
        height: 20px; */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    }
    .itemInfo .item-content .item-price{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }
    .itemInfo .item-content .item-price .price{
        color: goldenrod;
    }
    .itemInfo .button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 3px;
    }
</style>