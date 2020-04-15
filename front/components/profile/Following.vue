<template>
  <div class="Following__Container">
    <div class="Following__Title">팔로잉</div>
  </div>
</template>

<script>
export default {
  name: "Following"
};
</script>

<style scoped>
.Following__Container {
  height: min-content;
  margin-top: 30px;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
}

.Following__Title {
  font-size: 16px;
  color: #45b416;
}
</style>