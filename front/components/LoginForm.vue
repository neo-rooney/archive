<template>
  <div>
    <form action="submit" class="LoginForm__Layout" v-if="me" @submit.prevent="onSubmitLogin">
      <div class="LoginForm__FormLayout Email">
        <span class="LoginForm__TextForm Email">Email</span>
        <input type="email" required class="LoginForm__InputForm Email" v-model="email" />
      </div>
      <div class="LoginForm__FormLayout Password">
        <span class="LoginForm__TextForm Password">Password</span>
        <input type="password" required class="LoginForm__InputForm Password" v-model="password" />
      </div>
      <input type="submit" value="Login" class="LoginForm__LoginBtn" />
    </form>
    <div v-else>
      <div>님이 로그인 하셨습니다.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmitLogin() {
      this.$store.dispatch("users/logIn", {
        email: this.email,
        password: this.password,
        nickname: "Rooney"
      });
    }
  }
};
</script>

<style scoped>
.LoginForm__Layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
}

.LoginForm__FormLayout {
  display: flex;
  flex-direction: column;
}

.LoginForm__FormLayout.Email,
.LoginForm__FormLayout.Password {
  margin-bottom: 30px;
}

.LoginForm__TextForm {
  margin-bottom: 10px;
  color: #45b416;
}

.LoginForm__InputForm {
  border: none;
  height: 20px;
  font-size: 16px;
  border-bottom: 1px solid #45b416;
}

.LoginForm__InputForm:active,
.LoginForm__InputForm:focus {
  outline: none;
}

.LoginForm__LoginBtn {
  border: none;
  border-radius: 5px;
  width: 50%;
  height: 30px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 16px;
  align-self: flex-end;
}

.LoginForm__LoginBtn:active,
.LoginForm__LoginBtn:focus {
  outline: none;
}
</style>