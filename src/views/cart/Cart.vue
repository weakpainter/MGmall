<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>购物车({{ length }})</template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import CartList from "./childComps/CartList.vue";
import CartBottom from "./childComps/CartBottom.vue";

export default {
  name: "Cart",
  components: { NavBar, CartList, Scroll, CartBottom },
  computed: {
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length: "cartLength",
    }),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
}
</script>

<style scoped>
#cart {
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>