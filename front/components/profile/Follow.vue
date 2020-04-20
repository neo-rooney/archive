<template>
  <div class="Follow__Container">
    <div class="Follow__Title">{{title}}</div>
    <div class="Follow__UsersLayout">
      <div v-for="item in users" :key="item.id" class="Follow__UsersWrapper">
        <font-awesome-icon icon="minus-circle" @click="remove(item.id)" class="Follow__removeIcon" />
        <span class="Follow__UserName">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Follow",
  props: {
    title: {
      type: String,
      default: ""
    },
    users: {
      type: Array,
      default: () => []
    },
    remove: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.Follow__Container {
  height: min-content;
  margin-top: 30px;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 7px 15px 0 rgba(39, 56, 85, 0.1);
}

.Follow__Title {
  font-size: 16px;
  color: #45b416;
}

.Follow__UsersLayout {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-auto-rows: 50px;
}

.Follow__UsersWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Follow__removeIcon {
  color: #45b416;
  margin-right: 10px;
  font-size: 18px;
}

.Follow__UserName {
  font-size: 18px;
}
</style>