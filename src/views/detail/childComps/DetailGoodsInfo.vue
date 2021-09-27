<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="detail-title clear-fix">
      <div class="start"></div>
      <div class="title">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="detail-content">
      <p>{{ detailInfo.detailImage[0].key }}</p>
      <div class="content-item">
        <img
          v-for="(item, index) in detailInfo.detailImage[0].list"
          :key="index"
          :src="item"
          @load="imgLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      count: 0,
      listLength: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      if (++this.count === this.listLength) {
        this.$emit("imgLoad");
      }
      // this.$emit("imgLoad")
    },
  },
  watch:{
      detailInfo(){
          this.listLength = this.detailInfo.detailImage[0].list.length
      }
  }
  
};
</script>

<style scoped>
.goods-info {
  margin-top: 20px;
  border-bottom: 5px solid rgba(243, 241, 241, 0.849);
}
.goods-info .detail-title .start,
.detail-title .end {
  width: 120px;
  height: 1px;
  margin: 10px 16px;
  background: #a3a3a5;
  position: relative;
}
.goods-info .detail-title .start {
  float: left;
}
.goods-info .detail-title .end {
  float: right;
}

.goods-info .detail-title .start::before {
  content: "★";
  position: absolute;
  top: -10px;
  left: -10px;
  font-size: 20px;
}
.goods-info .detail-title .end::after {
  content: "★";
  position: absolute;
  top: -10px;
  right: -5px;
  font-size: 20px;
}

.goods-info .detail-title .title {
  clear: both;
  padding: 20px;
  line-height: 20px;
}

.goods-info .detail-content p {
  margin: 10px;
  font-weight: 600;
}
.goods-info .detail-content .content-item img {
  width: 100%;
  height: 100%;
}
</style>