<template>
  <div class="bottom-bar">
      <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="barClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    barClick(){
      this.$emit('barClick')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 55px;
  width: 100%;
  background: #fff;
  position: fixed;
  text-align: center;
  display: flex;
  z-index: 9;
}
.bottom-bar .bar-item {
  flex: 1;
  display: flex;
}
.bottom-bar .bar-item > div{
    flex: 1;
}
.bottom-bar .bar-item .icon{
    display: block;
    width: 30px;
    height: 30px;
    margin: 3px auto;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bottom-bar .bar-item .service{
    background-position: 0 -72px;
}
.bottom-bar .bar-item .shop{
    background-position: 0 -134px;
}

.bottom-bar .bar-right{
    line-height: 55px;
}
.bottom-bar .bar-item .cart{
    background: #ffe817;
}
.bottom-bar .bar-item .buy{
    color: #fff;
    background: #f69;
}

</style>