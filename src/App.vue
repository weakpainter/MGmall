<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <!-- 缓存页面 -->
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
      
    </router-view>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/maintabbar/MainTabbar.vue";

export default {
  name: "app",
  components: { MainTabbar },
};
</script>

<style>
@import "assets/css/base.css";
</style>
