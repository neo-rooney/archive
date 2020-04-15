<template>
  <div>
    <form action="submit" class="LoginForm__Layout" v-if="!me" @submit.prevent="onSubmitLogin">
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
    <div v-else class="LoginForm__LayoutLogin">
      <div class="LoginForm__LoginInfo">
        <div class="LoginForm__Nickname">{{me.nickname}}</div>
        <div class="LoginForm__NicknameNotice">님이 로그인 하셨습니다.</div>
      </div>
      <button class="LoginForm__LogoutBtn" @click="onClickLogout">Logout</button>
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
    async onSubmitLogin() {
      try {
        await this.$store.dispatch("users/logIn", {
          email: this.email,
          password: this.password,
          nickname: "Rooney"
        });
      } catch (error) {
        console.log(error);
      }
    },
    async onClickLogout() {
      try {
        await this.$store.dispatch("users/logOut");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.LoginForm__Layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: min-content;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
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
  cursor: pointer;
}

.LoginForm__LoginBtn:active,
.LoginForm__LoginBtn:focus,
.LoginForm__LogoutBtn:active,
.LoginForm__LogoutBtn:focus {
  outline: none;
}

.LoginForm__LayoutLogin {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
}

.LoginForm__LoginInfo {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.LoginForm__Nickname {
  color: #45b416;
}

.LoginForm__LogoutBtn {
  position: absolute;
  bottom: 30px;
  border: none;
  border-radius: 5px;
  width: 50%;
  height: 30px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}
</style>