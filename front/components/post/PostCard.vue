<template>
  <div class="PostCard__Container">
    <div class="PostCard__Retweet">rooney님이 리트윗하셨습니다.</div>
    <div class="PostCard__ContentLayout">
      <div class="PostCard__AuthorLayout">
        <div class="PostCard__Author">NaDa</div>
        <button class="PostCard__FollowBtn">팔로우</button>
      </div>
      <div class="PostCard__Content">안녕하세요</div>
      <div class="PostCard__CreateAt">하루전</div>
    </div>
    <div class="PostCard__IconBox">
      <font-awesome-icon icon="retweet" />
      <font-awesome-icon icon="heart" />
      <font-awesome-icon icon="comment-alt" />
      <font-awesome-icon icon="ellipsis-h" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard"
};
</script>

<style scoped>
.PostCard__Container {
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
.PostCard__FollowBtn:focus {
  outline: none;
}

.PostCard__Content{
  margin-bottom: 15px;
}

.PostCard__IconBox{
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;
  margin-top:20px;
  color: #45b416;
}
</style>