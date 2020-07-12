<template>
  <div class="PostCard__Container">
    <div class="PostCard__Retweet">rooney님이 리트윗하셨습니다.</div>
    <div class="PostCard__ContentLayout">
      <div class="PostCard__AuthorLayout">
        <nuxt-link :to="`/user/${postData.id}`">
          <div class="PostCard__Author">{{postData.User.nickname}}</div>
        </nuxt-link>
        <button class="PostCard__FollowBtn">팔로우</button>
      </div>
      <post-image :images="postData.Images || []" />
      <div class="PostCard__Content">{{postData.content}}</div>
      <div class="PostCard__CreateAt">{{postData.createAt}}</div>
    </div>
    <div class="PostCard__IconBox">
      <font-awesome-icon icon="retweet" class="PoastCard__Icon Retweet" />
      <font-awesome-icon :icon="['far','heart']" class="PoastCard__Icon Heart" />
      <font-awesome-icon icon="heart" class="PoastCard__Icon Heart" />
      <font-awesome-icon
        icon="comment-alt"
        class="PoastCard__Icon CommentAlt"
        @click="onClickCommentBtn"
      />
      <font-awesome-icon
        icon="ellipsis-h"
        class="PoastCard__Icon Ellipsis"
        @click="onClickMoreBtn"
      />
    </div>
    <div v-if="isMore" class="PostCard__DeleteAndModify">
      <button class="PostCard__ModifyBtn">수정</button>
      <button class="PostCard__DeleteBtn" @click="deletePost">삭제</button>
    </div>
    <div class="PostCard__CommentContainer" v-if="comment">
      <CommentForm :postId="postData.id" />
      <ul>
        <li v-for="item in postData.Comments" :key="item.id" class="PostCard__CommentLayout">
          <div class="PostCard__CommentAvatar">
            <span>{{item.User.nickname[0]}}</span>
          </div>
          <div class="PostCard__CommentContentLayout">
            <div class="PostCard__CommentNickname">{{item.User.nickname}}</div>
            <span class="PostCard__CommentContent">{{item.content}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CommentForm from "@/components/post/CommentForm.vue";
import PostImage from "@/components/post/PostImage.vue";

export default {
  name: "PostCard",
  components: {
    CommentForm,
    PostImage
  },
  props: {
    postData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isMore: false,
      comment: false
    };
  },
  methods: {
    onClickMoreBtn() {
      this.isMore = !this.isMore;
    },
    onClickCommentBtn() {
      console.log("postData", this.postData.id);
      if (!this.comment) {
        this.$store.dispatch("posts/loadComments", {
          postId: this.postData.id
        });
      }
      this.comment = !this.comment;
    },
    deletePost() {
      this.$store.dispatch("posts/deleteContent", {
        postId: this.postData.id
      });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a::after {
  text-decoration: none;
}
.PostCard__Container {
  position: relative;
  height: min-content;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
}
.PostCard__Retweet {
  color: #9f9f9f;
  margin-bottom: 15px;
}

.PostCard__ContentLayout {
  height: min-content;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.PostCard__AuthorLayout {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.PostCard__Author {
  font-size: 20px;
  color: #45b416;
  margin-right: 10px;
}

.PostCard__FollowBtn {
  border: none;
  border-radius: 5px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
}

.PostCard__FollowBtn:active,
.PostCard__FollowBtn:focus,
.PostCard__ModifyBtn,
.PostCard__DeleteBtn {
  outline: none;
}

.PostCard__Content {
  margin-top: 15px;
  margin-bottom: 15px;
}

.PostCard__IconBox {
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;
  margin-top: 20px;
  color: #45b416;
}

.PoastCard__Icon {
  cursor: pointer;
}
.PostCard__DeleteAndModify {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 53%;
  z-index: 999;
}

.PostCard__ModifyBtn,
.PostCard__DeleteBtn {
  border: none;
  border-radius: 5px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
}
.PostCard__ModifyBtn {
  margin-bottom: 5px;
}

.PostCard__CommentContainer {
  width: 100%;
  height: min-content;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
  box-sizing: border-box;
  margin-top: 20px;
}

.PostCard__CommentLayout {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 10px;
}

.PostCard__CommentAvatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #45b416;
  width: 30px;
  height: 100%;
  font-size: 18px;
  border-radius: 50%;
  color: #ffffff;
}
.PostCard__CommentContentLayout {
  margin-left: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.PostCard__CommentNickname {
  color: #45b416;
  font-size: 14px;
  padding-bottom: 3px;
}
</style>