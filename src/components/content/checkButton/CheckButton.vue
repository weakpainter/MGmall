<template>
    <div class="check-button" :class="{checked: isChecked}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
    .check-button{
        overflow: hidden;
        text-align: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #ccc;
    }
    .checked{
        background-color: hotpink;
        border-color: hotpink;
    }
</style>