<template>
  <div class="cart-bottom">
    <div class="cart-count">
      <check-button :isChecked="checkAll" @click.native="selectAll" />
      <span class="count">全选</span>
    </div>
    <div class="conut-all">
      合计:&nbsp;&nbsp;<span>￥{{ getPrice }}</span>
    </div>
    <div class="go-count">去结算({{ getTotal }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { CheckButton },
  name: "CartBottom",
  computed: {
    ...mapGetters(["cartList"]),
    getPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    getTotal() {
      return this.cartList.filter((item) => item.checked).length;
    },
    checkAll() {
      // return !(this.cartList.filter(item => !item.checked).length)

      return (
        this.cartList.length && !this.cartList.find((item) => !item.checked)
      );
      // return this.cartList.every(item => item.checked)
      // return !this.cartList.some(item => !item.checked)
      
        // for (let item of this.cartList) {
        //   if (!item.checked) {
        //     return false;
        //   }
        // }
        // return true; //return true是在遍历结束后调用，不能写在for循环语句内
    },
  },
  methods: {
    selectAll() {
      if (this.checkAll) {
        // for (let item of this.cartList){
        // item.checked = false;
        // }
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      }

      // this.cartList.forEach(item => item.checked = !this.checked) //此简化在此不能用
    },
  },
};
</script>

<style scoped>
.cart-bottom {
  width: 100%;
  height: 40px;
  background-color: rgb(245, 233, 235);
  position: absolute;
  bottom: 49px;
  box-shadow: 0 2px 7px rgba(73, 73, 73, 0.4);
  display: flex;
}
.cart-bottom .cart-count {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.cart-bottom .cart-count .count {
  margin: 0 10px;
}
.cart-bottom .conut-all {
  padding-left: 10px;
  font-size: 18px;
  flex: 1;
  line-height: 40px;
}
.cart-bottom .go-count {
  width: 100px;
  height: 40px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  background-color: var(--color-tint);
}
</style>