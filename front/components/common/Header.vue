<template>
  <!-- 20.04.10 Header 작업 : 배철훈 -->
  <div class="Header__Container">
    <div class="Header__LeftMenu">
      <nuxt-link to="/" class="Header__Logo">NodeBrid</nuxt-link>
    </div>
    <div class="Header__RightMenu">
      <div class="Header__SearchMenu">
        <font-awesome-icon icon="search" class="Header__SearchIcon" />
        <form action="submit" @submit.prevent="onSubmitKeyword">
          <input v-model="keyword" type="text" placeholder="검색" class="Header__SearchInput" />
        </form>
      </div>
      <nuxt-link to="/profile" class="Header__ProfileLink">프로필</nuxt-link>
      <nuxt-link to="/signUp" class="Header__SignUpLink">회원가입</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    onSubmitKeyword() {
      this.$router.push({
        path: `/hashTag/${this.keyword}`
      });
      this.keyword = "";
    }
  }
};
</script>

<style scoped>
.Header__Container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 50px;
  background-color: #45b416;
}

.Header__Container,
.Header__Container a {
  color: #ffffff;
}
.Header__LeftMenu {
  font-size: 25px;
}

.Header__RightMenu {
  display: flex;
  align-items: center;
}

.Header__SearchMenu{
  display: flex;
  align-items: center;
}

.Header__SignUpLink {
  margin-left: 20px;
}

.Header__ProfileLink {
  margin-left: 20px;
}

.Header__SearchInput {
  margin-left: 10px;
  background: #45b416;
  border: none;
  border-bottom: 1px solid #ffffff;
  width: 200px;
  height: 20px;
}

.Header__SearchInput:focus {
  outline: none;
  color: #ffffff;
}

.Header__SearchInput::placeholder {
  color: #ffffff;
  font-size: 16px;
}
/*focus시 placeholder 사라지게 하기*/
.Header__SearchInput:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder {
  /* WebKit browsers */
  color: transparent;
}
.Header__SearchInput:focus:-moz-placeholder,
textarea:focus:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: transparent;
}
.Header__SearchInput:focus::-moz-placeholder,
textarea:focus::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: transparent;
}

.Header__SearchInput:focus:-ms-input-placeholder,
textarea:focus:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: transparent;
}
</style>