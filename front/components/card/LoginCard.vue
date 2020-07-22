<template>
  <div>
    <form action="submit" class="LoginCard__Layout">
      <div class="LoginCard__InputLayout Email">
        <span class="LoginCard__InputLabal Email">Email</span>
        <input type="email" required class="LoginCard__Input Email" @input="onChangeEmail" />
      </div>
      <div class="LoginCard__InputLayout Password">
        <span class="LoginCard__InputLabal Password">Password</span>
        <input type="password" required class="LoginCard__Input Password" @input="onChangePassword" />
      </div>
      <input type="submit" value="Login" class="LoginCard__LoginBtn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
  methods: {
    onChangeEmail(e) {
      console.log(e.target.value);
    },
    onChangePassword(e) {
      console.log(e.target.value);
    }
  }
};
</script>

<style  scoped>
.LoginCard__Layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: min-content;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
}

.LoginCard__InputLayout {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
</style>