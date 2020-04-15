<template>
  <div class="PostFrom__Container">
    <textarea placeholder="어떤 신기한 일이 있었나요?" class="PostFrom__Textarea"></textarea>
    <div class="PostFrom__ButtonBox">
      <button class="PostFrom__Btn Image">사진</button>
      <input type="submit" class="PostFrom__Btn Post" value="POST" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PostFrom"
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

.PostFrom__Textarea {
  width: 100%;
  height: 130px;
}

.PostFrom__Textarea:active,
.PostFrom__Textarea:focus {
  outline: none;
}

.PostFrom__Textarea::placeholder {
  font-size: 16px;
  padding: 15px;
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