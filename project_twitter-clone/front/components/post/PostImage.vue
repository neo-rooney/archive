<template>
  <div v-if="images.length === 0">image</div>
  <div class="PostImage__ImageWrapper" v-else-if="images.length === 1">
    <div class="PostImage__ImageContainer" @click="openZoom">
      <img :src="`http://localhost:3085/${images[0].src}`" alt="사진" />
    </div>
    <image-zoom v-if="isZoomed" :images="images" :closeZoom="closeZoom" />
  </div>
  <div class="PostImage__ImageWrapper" v-else-if="images.length === 2">
    <div class="PostImage__ImageContainer" @click="openZoom">
      <img :src="`http://localhost:3085/${images[0].src}`" alt="사진" />
    </div>
    <div class="PostImage__ImageContainer" @click="openZoom">
      <img :src="`http://localhost:3085/${images[1].src}`" alt="사진" />
    </div>
    <image-zoom v-if="isZoomed" :images="images" :closeZoom="closeZoom" />
  </div>
  <div class="PostImage__ImageWrapper" v-else-if="images.length > 2">
    <div class="PostImage__ImageContainer" @click="openZoom">
      <img :src="`http://localhost:3085/${images[0].src}`" alt="사진" />
    </div>
    <div class="PostImage__ButtonWrapper">
      <button @click="openZoom">더보기</button>
    </div>
    <image-zoom v-if="isZoomed" :images="images" :closeZoom="closeZoom" />
  </div>
</template>

<script>
import ImageZoom from "@/components/post/ImageZoom.vue";
export default {
  name: "PostImage",
  components: {
    ImageZoom,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isZoomed: false,
    };
  },
  methods: {
    openZoom() {
      this.isZoomed = true;
    },
    closeZoom() {
      this.isZoomed = false;
    },
  },
};
</script>

<style scoped>
.PostImage__ImageWrapper {
  display: flex;
  align-items: center;
  padding: 10px;
}

.PostImage__ImageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 300px;
  margin-right: 10px;
  background-color: black;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.PostImage__ButtonWrapper {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 14px;
}
</style>
