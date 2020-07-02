<template>
  <form class="PostFrom__Container" @submit.prevent.capture="onSubmitContents">
    <textarea placeholder="어떤 신기한 일이 있었나요?" class="PostFrom__Contents" v-model="content"></textarea>
    <div class="PostFrom__ButtonBox">
      <button type="button" class="PostFrom__Btn Image" @click.stop="UploadPhoto">사진</button>
      <input ref="imageInput" type="file" multiple hidden @change="onChangeImages" />
      <input type="submit" class="PostFrom__Btn Post" value="POST" />
    </div>
    <div v-if="imagePaths" class="PostFrom__PreviewImageContainenr">
      <div class="PostFrom__PreviewImageWrapper" v-for="(item, index) in imagePaths" :key="index">
        <img class="PostFrom__PreviewImage" :src="`http://localhost:3085/${item}`" alt="이미지" />
        <button class="PostFrom__Btn Remove" type="button" @click="removeImage(index)">삭제</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PostForm",
  computed: {
    user() {
      return this.$store.state.users.me;
    },
    ...mapState("posts", ["imagePaths"])
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    async onSubmitContents() {
      try {
        await this.$store.dispatch("posts/postContent", {
          content: this.content
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.content = "";
      }
    },
    UploadPhoto() {
      this.$refs.imageInput.click();
    },
    onChangeImages(e) {
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, f => {
        imageFormData.append("image", f);
      });
      this.$store.dispatch("posts/uploadImages", imageFormData);
      console.log("imagePaths", this.imagePaths);
    },
    removeImage(index) {
      this.$store.commit("posts/removeImagePath", index);
    }
  }
};
</script>

<style scoped>
.PostFrom__Container {
  width: 100%;
  height: min-content;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
  box-sizing: border-box;
  margin-bottom: 20px;
}

.PostFrom__Contents {
  width: 100%;
  height: 130px;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid #45b416;
  resize: none;
  font-size: 16px;
}

.PostFrom__Contents:active,
.PostFrom__Contents:focus {
  outline: none;
}

.PostFrom__Contents::placeholder {
  font-size: 16px;
}

.PostFrom__ButtonBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.PostFrom__Btn {
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 14px;
  align-self: flex-end;
}

.PostFrom__Btn:active,
.PostFrom__Btn:focus {
  outline: none;
}

.PostFrom__Btn.Remove {
  margin-top: 5px;
  width: 30px;
  height: 20px;
  font-size: 10px;
  align-self: center;
}

.PostFrom__PreviewImageContainenr {
  display: flex;
  margin-top: 10px;
}

.PostFrom__PreviewImageWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.PostFrom__PreviewImage {
  border: 1px solid #45b416;
  border-radius: 5px;
  width: 40px;
  height: 40px;
}
</style>
