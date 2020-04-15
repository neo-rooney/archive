<template>
  <form class="PostFrom__Container" @submit.prevent.capture="onSubmitContents">
    <textarea placeholder="어떤 신기한 일이 있었나요?" class="PostFrom__Contents" v-model="content"></textarea>
    <div class="PostFrom__ButtonBox">
      <button type="button" class="PostFrom__Btn Image" @click.stop="UploadPhoto">사진</button>
      <input type="submit" class="PostFrom__Btn Post" value="POST" />
    </div>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  computed: {
    user() {
      return this.$store.state.users.me;
    }
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
          id: Date.now(),
          content: this.content,
          user: {
            email: this.user.email,
            nickname: this.user.nickname
          },
          Commnets: [],
          image: [],
          createAt: Date.now()
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.content = "";
      }
    },
    UploadPhoto() {
      console.log("사진");
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
</style>