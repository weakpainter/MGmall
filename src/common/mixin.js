import { debounce } from "./utils"
import BackTop from "components/content/backtop/BackTop.vue";

export const itemImgMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 50)

        this.itemImgListener = () => {
            refresh()
        }
        // 监听item图片加载完成
        this.$bus.on('itemImageLoad', this.itemImgListener)

    }
}

export const backTopMixin = {
    data() {
        return {
            isShowTop: false
        }
    },
    components: {
        BackTop
    },
    methods:{
        Topclick() {
            this.$refs.scroll.scrollTo(0, 0);
          },
        ListenBackTop(position){
            this.isShowTop = (-position.y) > 1000;
        }
    }
}