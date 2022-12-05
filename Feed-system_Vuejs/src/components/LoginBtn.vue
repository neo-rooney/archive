<template>
  <div class="login">
    <router-link to="/login">
      <div class="login__text">
        로그인
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  width: 235px;
  height: 60px;
  border-radius: 5px;
  background-color: #00c854;
}

.login__text {
  font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.login a {
  text-decoration: none;
  width: 235px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .login {
    display: none;
  }
}
</style>
