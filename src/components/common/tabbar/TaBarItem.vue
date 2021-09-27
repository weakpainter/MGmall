<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        
        <div v-else><slot name="item-icon-active"></slot></div>
        <!-- <div :class="{active : isActive}">
            <slot name="item-title"></slot>
        </div> -->
        <div :style="activeColor">
            <slot name="item-title"></slot>
        </div>
        
        <!-- <img src="../../assets/img/tabbar/svg/gelishuang.svg" />
        <div>首页</div> -->
    </div>
</template>

<script>
export default {
    name:'TaBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:true
        }
    },
    computed:{
        isActive(){
            //路径相等时 isActive才为true
            //this.$route.path为当前活跃路径
            return this.$route.path.indexOf(this.path) !==-1
        },
        activeColor(){
            return this.isActive ? {color: this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path).catch(err=>{})
        }
    }
}
</script>

<style>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 15px;
}

.tab-bar-item img{
    width: 27px;
    height: 27px;
    margin-top: 2px;
    vertical-align: middle;
}

.active{
    color: cornflowerblue;
}

</style>