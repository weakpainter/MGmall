<template>
  <div class="comments-info">
    <div class="comments-title">
      <p>用户评价</p>
      <p>更多</p>
    </div>
    <div
      class="comments-content"
      v-for="(item, index) in commentsInfo"
      :key="index"
    >
      <div class="comments-content-title">
        <img :src="item.user.avatar" alt="" />
        <span>{{ item.user.uname }}</span>
      </div>

      <div class="comment-content-com">
        <div>{{ item.content }}</div>
        <span>{{ showDate }}</span>
        <span>{{ item.style }}</span>
      </div>

      <div class="info-imgs" v-if="item.images">
          <img :src="img" alt="" v-for="(img,indey) in item.images" :key="indey">
      </div>
    </div>

  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: "DetailCommentsInfo",
  props: {
    commentsInfo: {
      type: Array,
      default: [],
    },
  },
  computed:{
      showDate(){
          const value=this.commentsInfo[0].created
          const date=new Date(value * 1000)
          return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
  }
};
</script>

<style scoped>
.comments-info {
  border-bottom: 5px solid #f2f5f8;
}
.comments-info .comments-title {
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
}
.comments-info .comments-title p:nth-child(1) {
  float: left;
}
.comments-info .comments-title p:nth-child(2) {
  float: right;
}
.comments-info .comments-content {
  padding: 20px 10px;
}
.comments-info .comments-content .comments-content-title {
  position: relative;
}
.comments-info .comments-content .comments-content-title img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.comments-info .comments-content .comments-content-title span {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  padding-left: 20px;
  color: #000;
}
.comments-info .comments-content .comment-content-com {
  margin-top: 10px;
}
.comments-info .comments-content .comment-content-com div {
  margin-bottom: 10px;
}
.comments-info .comments-content .comment-content-com span {
  font-size: 13px;
  color: #999;
  margin-right: 10px;
}

.comments-info .info-imgs {
    margin-top: 10px;
  }

.comments-info .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>