import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mitt from 'mitt'
import toast from 'components/common/toast'
import FastClick from 'fastclick'


const app=createApp(App);
app.use(store).use(router).use(toast).mount("#app");
app.config.globalProperties.$bus = new mitt()

// 解决移动端点击300毫秒延迟问题
FastClick.attach(document.body)



