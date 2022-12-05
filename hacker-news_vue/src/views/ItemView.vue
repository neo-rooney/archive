<template>
  <div>
    <!-- <p>{{ItemInfo.title}}</p>
    <div>{{ItemInfo.content}}</div>-->
    <section>
      <div>User</div>
      <div>
        <router-link :to="`/user/${ItemInfo.user}`">{{ItemInfo.user}}</router-link>
        <div>{{ItemInfo.time_ago}}</div>
      </div>
      <h2>{{ItemInfo.title}}</h2>
    </section>
    <section>
      <div v-html="ItemInfo.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    ItemInfo() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
</style>