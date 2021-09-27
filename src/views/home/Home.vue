<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="changeTab"
        ref="topTabControl"
        class="tabfixed"
        v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contenScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" ref="hSwiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <feature-view :feature="recommends"></feature-view>
      <recommend-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="changeTab"
        ref="tabControl"
      ></tab-control>

      <goods-list :goodslist="showGoods" class="goods-height"></goods-list>
    </scroll>

    <back-top @click.native="Topclick" v-show="isShowTop"/>
  </div>
</template>


<script>
import {itemImgMixin, backTopMixin} from "common/mixin"

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import { getHomeMultidata, getHomeData } from "network/home";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";

export default {
  name: "Home",
  mixins:[itemImgMixin, backTopMixin],
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: "pop",
      Imgscroll: {},
      // isShowTop:false,
      taboffsetTop:0,
      isTabFixed:false,
      scrollY:0,
    };
  },
  created() {
    // 请求多个数据
    this.getMultiData();

    // 请求商品数据
    this.getHomeProducts("pop");
    this.getHomeProducts("new");
    this.getHomeProducts("sell");

  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  unmounted(){
    console.log('home unmounted')
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.scrollY,20)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.scrollY = this.$refs.scroll.getScrollY()

    this.$bus.off('itemImageLoad', this.itemImgListener)
  },
  mounted(){
  },
  methods: {
    //事件监听相关方法
    changeTab(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

      // 让tab-control保持一致
      this.$refs.topTabControl.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },

    contenScroll(position) {
      // 判断是否返回顶部
      this.ListenBackTop(position);

      // 判断是否吸顶
      this.isTabFixed = (-position.y) > this.taboffsetTop
    },
    loadMore(){
      this.getHomeProducts(this.currentType)
    },
    swiperImageLoad(){

      // $refs获取组件对象
      // $el获取组件对象的所有dom元素(所有组件都有该属性)
      console.log("1: "+this.$refs.tabControl.$el.offsetTop)
      this.taboffsetTop=this.$refs.tabControl.$el.offsetTop
    },
   
  

    // 网络请求方法
    getMultiData() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeProducts(type) {
      const page = this.goods[type].page+1;
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishUp();
      });
    },
  },
};
</script>


<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
/* .fixed {
  position: sticky;
  top: 0;
  z-index: 9;
} */


.tabfixed{
  position: relative;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: scroll;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .content{
  height: calc(100% - 93px);
  margin-top: 44px;
} */

.goods-height{
  height: 5000px;
}
</style>