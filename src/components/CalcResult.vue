<template>
  <div>
    <input type="text" readonly :value="this.$store.state.input.myInput" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  border: 1px solid #5d5e60;
  border-bottom: none;
  background-color: #565759;
  font-size: 30px;
  font-weight: 900;
  color: #ffffff;
  text-align: right;
}

input:focus {
  outline: none;
}
</style>