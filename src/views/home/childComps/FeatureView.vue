<template>
    <div class="feature">
        <div v-for="(item,index) in feature" :key="index" class="feature-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"FeatureView",
    props:{
        feature:{
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .feature{
        width: 100%;
        display: flex;
        border-bottom: 10px solid #eee;
    }
    .feature .feature-item{
        width: 25%;
        flex: 1;
        padding: 10px;
        text-align: center;
    }
    .feature .feature-item a img{
        width: 100%;
    }

</style>