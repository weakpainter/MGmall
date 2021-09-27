<template>
  <div class="tab-control">
    <div class="tab-control-item" 
        :class="{active:currentIndex==index}" 
        v-for="(item, index) in titles" 
        :key="index"
        @click="itemChange(index)">

      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
      itemChange(index){
          this.currentIndex=index;
          this.$emit('tabClick',index)
      }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  width: 100%;
  text-align: center;
  background: #fff;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.active{
    color: var(--color-high-text);
}
.active span{
    padding: 5px;
    border-bottom: 2px solid var(--color-tint);
}
</style>