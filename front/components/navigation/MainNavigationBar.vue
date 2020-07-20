<template>
  <div class="MainNavigationBar__Container">
    <div class="MainNavigationBar__LeftMenu">
      <nuxt-link to="/" class="MainNavigationBar__Logo">NodeBrid</nuxt-link>
    </div>
    <div class="MainNavigationBar__RightMenu">
      <div class="MainNavigationBar__SearchMenu">
        <form action="submit">
          <input
            type="text"
            placeholder="검색"
            class="MainNavigationBar__SearchInput"
          />
        </form>
      </div>
      <nuxt-link to="/profile" class="MainNavigationBar__ProfileLink">프로필</nuxt-link>
      <nuxt-link to="/signUp" class="MainNavigationBar__SignUpLink">회원가입</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavigationBar"
};
</script>

<style scoped>
.MainNavigationBar__Container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 50px;
  background-color: #45b416;
}
.MainNavigationBar__Container,
.MainNavigationBar__Container a {
  color: #ffffff;
}
.MainNavigationBar__LeftMenu {
  font-size: 25px;
}
.MainNavigationBar__RightMenu {
  display: flex;
  align-items: center;
}
.MainNavigationBar__SearchMenu {
  display: flex;
  align-items: center;
}
.MainNavigationBar__SignUpLink {
  margin-left: 20px;
}
.MainNavigationBar__ProfileLink {
  margin-left: 20px;
}
.MainNavigationBar__SearchInput {
  margin-left: 10px;
  background: #45b416;
  border: none;
  border-bottom: 1px solid #ffffff;
  width: 200px;
  height: 20px;
}
.MainNavigationBar__SearchInput:focus {
  outline: none;
  color: #ffffff;
}
.MainNavigationBar__SearchInput::placeholder {
  color: #ffffff;
  font-size: 16px;
}
/*focus시 placeholder 사라지게 하기*/
.MainNavigationBar__SearchInput:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder {
  /* WebKit browsers */
  color: transparent;
}
.MainNavigationBar__SearchInput:focus:-moz-placeholder,
textarea:focus:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: transparent;
}
.MainNavigationBar__SearchInput:focus::-moz-placeholder,
textarea:focus::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: transparent;
}
.MainNavigationBar__SearchInput:focus:-ms-input-placeholder,
textarea:focus:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: transparent;
}
</style>