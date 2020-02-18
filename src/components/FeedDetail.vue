<template>
  <div>
    <div class="feed">
      <div class="feed__title">{{ title }}</div>
      <div class="feed__contents">{{ contents }}</div>
      <div class="feed__create-at">{{ createAt }}</div>
    </div>
    <div class="reply__logo">
      <span>답변</span>
      <span>{{ reply.length }}</span>
    </div>
    <div class="reply__reply">
      <ul>
        <li v-for="item in reply" :key="item.id">
          <Reply v-bind:value="item" v-bind:title="title" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchFeedDetail } from "../api";
import Reply from "./Reply.vue";

export default {
  components: {
    Reply
  },
  data() {
    return {
      fid: 0,
      title: "",
      contents: "",
      createAt: "",
      reply: []
    };
  },
  created() {
    this.fid = this.$route.params.fid;
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetchFeedDetail
        .fetch({
          id: this.fid
        })
        .then(data => {
          console.log(data.info);
          this.title = data.info.title;
          this.contents = data.info.contents;
          this.createAt = data.info.created_at;
          this.reply = data.info.reply;
        });
    }
  }
};
</script>

<style scoped>
@import "../../reset.css";

.feed {
  margin-left: 390px;
  margin-top: 50px;
  width: 1140px;
  height: auto;
  border-radius: 5px;
  backdrop-filter: blur(30px);
  border: solid 1px #00c854;
  background-color: #ffffff;
}

.feed__title {
  margin-top: 21px;
  margin-right: 30px;
  margin-left: 30px;
  width: 1079px;
  height: auto;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: justify;
  color: #282c30;
}

.feed__contents {
  margin-top: 6px;
  margin-right: 30px;
  margin-left: 30px;
  width: 1079px;
  height: auto;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: justify;
  color: #495057;
}

.feed__create-at {
  margin-top: 15px;
  margin-left: 30px;
  margin-bottom: 21px;
  width: 148px;
  height: 19px;
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
}
.reply__logo {
  margin-top: 30px;
  margin-left: 390px;
  margin-bottom: 10px;
}
.reply__logo span:nth-child(1) {
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}
.reply__logo span:nth-child(2) {
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #00c854;
}

.reply__reply {
  margin-left: 390px;
}

@media screen and (max-width: 600px) {
  .feed {
    margin-left: 15px;
    margin-top: 20px;
    width: 343px;
    border-radius: 0px;
    border: 0;
    border-top: #00c854 2px solid;
    border-bottom: #00c854 2px solid;
  }
  .feed__title {
    margin-top: 21px;
    margin-right: 0px;
    margin-left: 0px;
    width: 343px;
    text-align: justify;
  }
  .feed__contents {
    margin-top: 7px;
    margin-right: 0px;
    margin-left: 0px;
    width: 343px;
  }
  .feed__create-at {
    margin-top: 16px;
    margin-left: 15px;
    margin-bottom: 20px;
  }
  .reply__logo {
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 10px;
  }
  .reply__reply {
    margin-left: 15px;
  }
}
</style>
