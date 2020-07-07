<template>
  <div class="ImageZoom__Container">
    <!-- <header>
      <h1>상세 이미지</h1>
      <button @click="closeZoom"></button>
    </header> -->
    <VueSlickCarousel v-bind="settings" class="ImageZoom__Carousel">
      <div v-for="(item, index) in images" :key="index">
        <img :src="`http://localhost:3085/${item.src}`" alt="상세보기 이미지" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  name: "ImageZoom",
  props: {
    images: {
      type: Array,
      default: [],
    },
    closeZoom: {
      type: Function,
      default: () => {},
    },
  },
  mounted() {
    console.log("images", this.images);
  },
  data() {
    return {
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    };
  },
};
</script>

<style scoped>
.ImageZoom__Container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

img {
}
</style>
