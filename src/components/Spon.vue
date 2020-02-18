<template>
  <div class="spon">
    {{ sponData.id }}
    <div class="spon__container">
      <div class="spon__logo">sponsored</div>
      <img v-bind:src="imgURL" alt="spon" target="_blank" class="spon__img" />
    </div>
    <div class="spon__container">
      <div class>
        <div class="spon__title">{{ sponData.title }}</div>
        <div class="spon__contents">{{ sponData.contents }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      imgURL: "",
      sponData: {}
    };
  },
  created() {
    this.sponData = this.value;
    this.createUrl();
  },
  methods: {
    createUrl() {
      const baseUrl = "https://cdn.comento.kr/assignment/";
      this.imgURL = baseUrl + this.sponData.img;
    }
  }
};
</script>
<style scoped>
.spon {
  width: 865px;
  height: 255px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
  display: flex;
}

.spon__logo {
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 16.5px;
}

.spon__img {
  width: 310px;
  height: 179px;
  object-fit: contain;
  margin-left: 30px;
}

.spon__container:nth-child(1) {
  margin-right: 29.5px;
}

.spon__container:nth-child(2) {
  margin-top: 56px;
}

.spon__title {
  width: 463px;
  height: 55px;
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #282c30;
  white-space: normal;
  line-height: 1.5;
  text-align: justify;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 11px;
}

.spon__contents {
  width: 465px;
  height: 99px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
  white-space: normal;
  line-height: 1.5;
  text-align: justify;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media screen and (max-width: 600px) {
  .spon {
    width: 375px;
    height: 381px;
    border-radius: 0px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
    display: block;
    border-bottom: 10px#d8d8d8 solid;
  }
  .spon__logo {
    margin-top: 20px;
    margin-left: 15px;
    margin-bottom: 16.5px;
  }
  .spon__img {
    width: 344.5px;
    height: 179px;
    margin-left: 15px;
    object-fit: contain;
  }
  .spon__container:nth-child(2) {
    margin-top: 16.5px;
    margin-left: 15px;
    margin-bottom: 20px;
  }

  .spon__title {
    width: 341px;
    height: 55px;
  }

  .spon__contents {
    width: 341px;
    height: 49px;
    -webkit-line-clamp: 2;
  }
}
</style>
