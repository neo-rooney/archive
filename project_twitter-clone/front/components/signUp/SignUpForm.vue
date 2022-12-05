<template>
  <form action="post" class="SignUpForm__Container" @submit.prevent="onSubmitForm">
    <div class="SignUpForm__FormLayout Email">
      <span class="SignUpForm__TextForm Email">Email</span>
      <input type="email" required class="SignUpForm__InputForm Email" v-model="email" />
    </div>
    <div class="SignUpForm__FormLayout Nickname">
      <span class="SignUpForm__TextForm Email">Nickname</span>
      <input type="text" required class="SignUpForm__InputForm Nickname" v-model="nickname" />
    </div>
    <div class="SignUpForm__FormLayout Password">
      <span class="SignUpForm__TextForm Password">Password</span>
      <input type="password" required class="SignUpForm__InputForm Password" v-model="password" />
    </div>
    <div class="SignUpForm__FormLayout Password">
      <span class="SignUpForm__TextForm Password">Confirm Password</span>
      <input
        type="password"
        required
        class="SignUpForm__InputForm Password"
        v-model="confirmPassword"
      />
    </div>
    <input type="submit" value="Sign Up" class="SignUpForm__LoginBtn" />
  </form>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      email: "",
      nickname: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    async onSubmitForm() {
      const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (this.password !== this.confirmPassword) {
        alert("비밀번호가 다릅니다. 확인해 주세요");
      } else if (!this.email || !regEmail.test(this.email)) {
        alert("Email을 확인해주세요");
      } else if (!this.nickname) {
        alert("닉네임을 입력해주세요");
      } else {
        const target = {
          email: this.email,
          nickname: this.nickname,
          password: this.password
        };
        try {
          await this.$store.dispatch("users/signUp", target);
        } catch (error) {
          console.log(error);
        } finally {
          this.$router.push({
            path: "/"
          });
        }
      }
    }
  }
};
</script>

<style scoped>
.SignUpForm__Container {
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

.SignUpForm__FormLayout {
  display: flex;
  flex-direction: column;
}

.SignUpForm__FormLayout.Email,
.SignUpForm__FormLayout.Nickname,
.SignUpForm__FormLayout.Password {
  margin-bottom: 30px;
}

.SignUpForm__TextForm {
  margin-bottom: 10px;
  color: #45b416;
}

.SignUpForm__InputForm {
  border: none;
  height: 20px;
  font-size: 16px;
  border-bottom: 1px solid #45b416;
}

.SignUpForm__InputForm:active,
.SignUpForm__InputForm:focus {
  outline: none;
}

.SignUpForm__LoginBtn {
  border: none;
  border-radius: 5px;
  width: 50%;
  height: 30px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 16px;
  align-self: flex-end;
}

.SignUpForm__LoginBtn:active,
.SignUpForm__LoginBtn:focus {
  outline: none;
}
</style>