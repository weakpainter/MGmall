<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goodslist"
      :key="index"
      :goodsitem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: { GoodsListItem },
  name: "GoodsList",
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods {
  width: 100%;
  padding:5px;
}
</style>