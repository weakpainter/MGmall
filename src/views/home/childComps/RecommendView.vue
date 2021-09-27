<template>
    <div class="recommed">
        <a href="http://act.mogujie.com/zzlx67">
            <img src="../../../assets/img/home/recommend_bg.jpg" alt="" @load="imgLoad">
        </a>
    </div>
</template>

<script>
export default {
    name:"RecommendView",
    methods:{
        imgLoad(){
            this.$emit("recommendImageLoad")
        }
    }
}
</script>

<style scoped>
    .recommed img{
        width: 100%;
    }
</style>

