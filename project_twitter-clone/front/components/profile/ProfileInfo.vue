<template>
  <div class="ProfileInfo__Container">
    <div class="ProfileInfo__InfoLayout Email">
      <span class="ProfileInfo__InfoTitle Email">Email</span>
      <span class="ProfileInfo__InfoData Email">{{user.email}}</span>
    </div>
    <div class="ProfileInfo__InfoLayout Nickname">
      <span class="ProfileInfo__InfoTitle Nickname">Nickname</span>
      <span v-show="!isModify" class="ProfileInfo__InfoData Nickname">{{user.nickname}}</span>
      <form
        v-show="isModify"
        action="submit"
        class="ProfileInfo__ModifyInfoForm"
        @submit.prevent="onChangeNickname"
      >
        <input type="text" class="ProfileInfo__ModifyInfoInput" v-model="nickname" />
      </form>
      <button class="ProfileInfo__ModifyBtn" @click="onClickModityBtn">{{buttonTitle}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  computed: {
    user() {
      return this.$store.state.users.me;
    }
  },
  data() {
    return {
      isModify: false,
      buttonTitle: "수정",
      nickname: this.$store.state.users.me.nickname
    };
  },
  methods: {
    onClickModityBtn() {
      this.isModify = !this.isModify;
      if (this.isModify) {
        this.buttonTitle = "확인";
      } else {
        this.buttonTitle = "수정";
        this.onChangeNickname();
      }
    },
    onChangeNickname() {
      this.$store.dispatch("users/changeNickname", {
        email: this.user.email,
        nickname: this.nickname
      });
    }
  }
};
</script>

<style scoped>
.ProfileInfo__Container {
  height: min-content;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
}

.ProfileInfo__InfoLayout {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.ProfileInfo__InfoTitle {
  font-size: 16px;
  color: #45b416;
  margin-bottom: 10px;
}

.ProfileInfo__ModifyInfoForm {
  height: 16px;
}

.ProfileInfo__ModifyInfoInput {
  border: none;
  height: 20px;
  font-size: 16px;
  border-bottom: 1px solid #45b416;
}

.ProfileInfo__ModifyBtn {
  align-self: flex-start;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  background-color: #45b416;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}

.ProfileInfo__ModifyBtn:active,
.ProfileInfo__ModifyBtn:focus {
  outline: none;
}
</style>
