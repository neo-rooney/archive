<template>
  <div class="reply">
    <div class="reply__user-name">{{ value.user.name }}</div>
    <div class="reply__underline"></div>
    <div class="reply__title">{{ title }}</div>
    <div class="reply__contents">{{ value.contents }}</div>
    <div class="reply__create-at">{{ value.created_at }}</div>
  </div>
</template>

<script>
export default {
  props: ["value", "title"]
};
</script>

<style scoped>
.reply {
  margin-bottom: 30px;
  width: 1140px;
  height: auto;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
}

.reply__user-name {
  margin-top: 21px;
  margin-left: 30px;
  margin-bottom: 10px;
  width: auto;
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #7e848a;
}

.reply__underline {
  margin-left: 30px;
  margin-bottom: 16px;
  width: 1080px;
  height: 1px;
  background-color: #e1e4e7;
}

.reply__title {
  margin-left: 30px;
  margin-bottom: 6px;
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

.reply__contents {
  margin-left: 30px;
  margin-bottom: 15px;
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

.reply__create-at {
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

@media screen and (max-width: 600px) {
  .reply {
    width: 343px;
    border: 0;
    border-radius: 0px;
    border-top: solid 1px #e1e4e7;
    border-bottom: solid 1px #e1e4e7;
  }
  .reply__user-name {
    margin-left: 0px;
  }
  .reply__underline {
    margin-left: 0px;
    margin-bottom: 16px;
    width: 343px;
  }
  .reply__title {
    margin-left: 0px;
    margin-bottom: 6px;
    width: 343px;
  }
  .reply__contents {
    margin-left: 0px;
    margin-bottom: 15px;
    width: 343px;
  }
  .reply__create-at {
    margin-left: 0px;
  }
}
</style>
