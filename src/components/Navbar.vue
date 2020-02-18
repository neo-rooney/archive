<template>
  <div class="nav-bar">
    <span class="nav-bar_text">
      [2020 / 02 / 18] 배철훈 :)
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  width: 1920px;
  height: 70px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
}

.nav-bar_text {
  width: 217px;
  height: 24px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #212529;
  margin-left: 390px;
}
@media screen and (max-width: 600px) {
  .nav-bar_text {
    margin-left: 15px;
  }
}
</style>
