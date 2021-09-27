<template>
  <ta-bar>
    <ta-bar-item path="/home" activeColor="red">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/home.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/home_active.svg" />
      </template>

      <template v-slot:item-title>
        <div>首页</div>
      </template>
    </ta-bar-item>

    <ta-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/category.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/category_active.svg" />
      </template>

      <template v-slot:item-title>
        <div>分类</div>
      </template>
    </ta-bar-item>

    <ta-bar-item path="/cart">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/cart.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/cart_active.svg" />
      </template>

      <template v-slot:item-title>
        <div>购物车</div>
      </template>
    </ta-bar-item>

    <ta-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/profile.svg" />
      </template>

      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/profile_active.svg" />
      </template>

      <template v-slot:item-title>
        <div>我的</div>
      </template>
    </ta-bar-item>
  </ta-bar>
</template>

<script>
import TaBar from "components/common/tabbar/TaBar.vue";
import TaBarItem from "components/common/tabbar/TaBarItem.vue";

export default {
  name: "MainTabbar",
  components: {
    TaBar,
    TaBarItem,
  },
};
</script>

<style>
</style>