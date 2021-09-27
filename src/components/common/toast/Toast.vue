<template>
    <div id="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
export default {
    name:'Toast',
    props:{
        message: String,
        isShow:{
            type:Boolean,
            default:false
        }
    },
    // data(){
    //     return {
    //         message: '',
    //         isShow: false
    //     }
    // },
    // methods:{
    //     show(txt='加入购物车成功', delay=1000){
    //         this.isShow = true
    //         this.message = txt

    //         setTimeout(()=>{
    //             this.isShow = false
    //             this.message = ''
    //         },delay)
    //     }
    // }
}
</script>

<style scoped>
    #toast{
        width: 150px;
        height: 40px;
        background: rgba(78, 78, 78, 0.8);
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        margin-left: -75px;
        text-align: center;
        line-height: 40px;
        border-radius: 6px;
        font-size: 18px;
        color: white;
    }
</style>