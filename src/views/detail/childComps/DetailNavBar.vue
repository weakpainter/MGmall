<template>
  <nav-bar>
    <template v-slot:left>
      <div class="back-img" @click="back">
        <img src="../../../assets/img/common/back.svg" alt="" />
      </div>
    </template>

    <template v-slot:center>
      <div class="title-bar">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index == curentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      curentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.curentIndex = index;
      this.$emit("titleClick",index)
    },
    back(){
        this.$router.back()
    }
  },
};
</script>

<style scoped>
.title-bar {
  display: flex;
}
.title-bar .title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back-img img{
    padding-top: 11px;
}
</style>