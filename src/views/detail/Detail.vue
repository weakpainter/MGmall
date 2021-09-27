<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="navbar"
    />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="itemScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goodsDetail" />
      <detail-shop-info :shopInfo="goodsInfo" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-item-params ref="params" :itemInfo="itemParams" />
      <detail-comments-info ref="comments" :commentsInfo="commentsInfo" />
      <goods-list ref="list" :goodslist="recommends" class="goods-height" />
    </scroll>
    <detail-bottom-bar @barClick="addToCart" />
    <back-top @click.native="Topclick" v-show="isShowTop" />
    <toast :message="message" :isShow="isShowToast" />
  </div>
</template>

<script>
import { itemImgMixin, backTopMixin } from "common/mixin";
import { getDetail, Detail, ShopInfo, getRecommend } from "network/detail";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailItemParams from "./childComps/DetailItemParams.vue";
import DetailCommentsInfo from "./childComps/DetailCommentsInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import Toast from "components/common/toast/Toast.vue";


import { mapActions } from "vuex";

export default {
  name: "Detail",
  mixins: [itemImgMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goodsDetail: {},
      goodsInfo: {},
      detailInfo: {},
      itemParams: {},
      commentsInfo: {},
      recommends: [],
      itemImgListener: null,
      TopNavBarY: [],
      getTopNavY: null,
      currentIndex: 0,
      message: "",
      isShowToast: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailItemParams,
    DetailCommentsInfo,
    GoodsList,
    DetailBottomBar,
    Toast,
  },
  created() {
    // 获取路径参数
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      // 取出轮播图信息
      this.topImages = data.itemInfo.topImages;
      // 创建商品对象
      this.goodsDetail = new Detail(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 创建店铺对象
      this.goodsInfo = new ShopInfo(data.shopInfo);
      // 取出详情信息
      this.detailInfo = data.detailInfo;
      // 取出参数信息
      this.itemParams = data.itemParams;
      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentsInfo = data.rate.list;
      }

      // 方法1，使用$nextTick，有bug
      // this.$nextTick(() => {
      //   this.TopNavBarY = [];
      //   this.TopNavBarY.push(0);
      //   this.TopNavBarY.push(this.$refs.params.$el.offsetTop);
      //   this.TopNavBarY.push(this.$refs.comments.$el.offsetTop);
      //   this.TopNavBarY.push(this.$refs.list.$el.offsetTop);

      //   console.log(this.TopNavBarY);
      // })
    });

    getRecommend().then((res) => {
      this.recommends = res.data.data.list;
    });

    // 方法2，用防抖图片全部加载完再调用
    // this.getTopNavY=debounce(()=>{

    //   this.TopNavBarY = [];
    //   this.TopNavBarY.push(0);
    //   this.TopNavBarY.push(this.$refs.params.$el.offsetTop);
    //   this.TopNavBarY.push(this.$refs.comments.$el.offsetTop);
    //   this.TopNavBarY.push(this.$refs.list.$el.offsetTop);

    //   console.log(this.TopNavBarY);
    // },20)
  },
  methods: {
    ...mapActions(["addCarList"]),
    imgLoad() {
      // 新版better-score不需要refresh
      // this.$refs.scroll.refresh()

      // this.getTopNavY()

      // 方法3，当图片全部加载完成时调用一次imgLoad
      this.TopNavBarY = [];
      this.TopNavBarY.push(0);
      this.TopNavBarY.push(this.$refs.params.$el.offsetTop);
      this.TopNavBarY.push(this.$refs.comments.$el.offsetTop);
      this.TopNavBarY.push(this.$refs.list.$el.offsetTop);
      this.TopNavBarY.push(Number.MAX_VALUE);

      // console.log(this.TopNavBarY);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.TopNavBarY[index], 100);
    },

    itemScroll(position) {
      const positionY = -position.y;
      let length = this.TopNavBarY.length;
      // for(let i=0;i<length;i++){
      //   if (this.currentIndex !== i && ((i < length-1 && positionY > this.TopNavBarY[i] && positionY <= this.TopNavBarY[i+1]) || (i == length-1 && positionY >= this.TopNavBarY[i]))) {
      //     this.currentIndex = i
      //     this.$refs.navbar.curentIndex = i
      //   }
      // }

      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.TopNavBarY[i] &&
          positionY < this.TopNavBarY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.curentIndex = this.currentIndex;
        }
      }

      // 返回顶部
      this.ListenBackTop(position);
    },
    addToCart() {
      // 获取购物车需要的商品数据
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsDetail.title;
      product.desc = this.goodsDetail.desc;
      product.price = this.goodsDetail.realPrice;
      product.iid = this.iid;

      // this.$store.commit('addCarList', product)
      // this.$store.dispatch('addCarList', product).then(res => console.log(res))
      this.addCarList(product).then((res) => {
        this.isShowToast = true;
        this.message = res;

        setTimeout(() => {
          this.isShowToast = false;
          this.message = "";
        }, 1000);

        // this.$toast.show(res, 1000)
      })

    },
  },
  mounted() {},
  unmounted() {
    this.$bus.off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
  overflow: hidden;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background: #fff;
}
.content {
  height: calc(100% - 44px - 55px);
}
.goods-height {
  height: 3900px;
}
</style>