<template>
  <form action="submit" class="CommentForm__Container" @submit.prevent="onSubmitComment">
    <textarea class="CommentForm__Contents" v-model="content" />
    <input type="submit" class="CommentForm__SubmitBtn" value="댓글" />
  </form>
</template>

<script>
export default {
  name: "CommentForm",
  props: {
    postId: {
      type: Number,
      default: 0
    }
  },
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
    async onSubmitComment() {
      if (this.content.length) {
        try {
          await this.$store.dispatch("posts/postCommnet", {
            postId: this.postId,
            content: this.content
          });
        } catch (error) {
          console.log(error);
        } finally {
          this.content = "";
        }
      } else {
        alert("댓글을 입력해 주세요!");
      }
    }
  }
};
</script>

<style scoped>
.CommentForm__Container {
  display: flex;
  align-items: center;
}

.CommentForm__Contents {
  width: 100%;
  height: 30px;
  padding-top: 5px;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid #45b416;
  resize: none;
  font-size: 16px;
}

.CommentForm__Contents:active,
.CommentForm__Contents:focus {
  outline: none;
}

.CommentForm__Contents::placeholder {
  font-size: 14px;
}

.CommentForm__SubmitBtn {
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  margin-left: 10px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 14px;
  align-self: flex-end;
}

.CommentForm__SubmitBtn:active,
.CommentForm__SubmitBtn:focus {
  outline: none;
}
</style>