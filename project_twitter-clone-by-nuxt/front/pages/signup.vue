<template>
  <form action="post" class="Signup__Container" @submit.prevent="onSubmitForm">
    <div class="Signup__FormLayout Email">
      <span class="Signup__TextForm Email">Email</span>
      <input type="email" required class="Signup__InputForm Email" v-model="email" />
    </div>
    <div class="Signup__FormLayout Nickname">
      <span class="Signup__TextForm Email">Nickname</span>
      <input type="text" required class="Signup__InputForm Nickname" v-model="nickname" />
    </div>
    <div class="Signup__FormLayout Password">
      <span class="Signup__TextForm Password">Password</span>
      <input type="password" required class="Signup__InputForm Password" v-model="password" />
    </div>
    <div class="Signup__FormLayout Password">
      <span class="Signup__TextForm Password">Confirm Password</span>
      <input type="password" required class="Signup__InputForm Password" v-model="confirmPassword" />
    </div>
    <input type="submit" value="Sign Up" class="Signup__LoginBtn" />
  </form>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      nickname: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    onSubmitForm() {
      this.$store.dispatch("user/signUp", {
        email: this.email,
        nickname: this.nickname,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
    },
  },
};
</script>

<style scoped>
.Signup__Container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: min-content;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
  box-sizing: border-box;
}
.Signup__FormLayout {
  display: flex;
  flex-direction: column;
}
.Signup__FormLayout.Email,
.Signup__FormLayout.Nickname,
.Signup__FormLayout.Password {
  margin-bottom: 30px;
}
.Signup__TextForm {
  margin-bottom: 10px;
  color: #45b416;
}
.Signup__InputForm {
  border: none;
  height: 20px;
  font-size: 16px;
  border-bottom: 1px solid #45b416;
}
.Signup__InputForm:active,
.Signup__InputForm:focus {
  outline: none;
}
.Signup__LoginBtn {
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 16px;
  align-self: flex-end;
  cursor: pointer;
}
.Signup__LoginBtn:active,
.Signup__LoginBtn:focus {
  outline: none;
}
</style>