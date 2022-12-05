<template>
  <div>
    <ProfileInfo />
    <Follow title="팔로잉" :users="followings" :remove="removeFollowing" :loadFunction ="loadFollowings" :hasMore="hasMoreFollowings"/>
    <Follow title="팔로워" :users="followers" :remove="removeFollower" :loadFunction ="loadFollowers" :hasMore="hasMoreFollowers"/>
  </div>
</template>

<script>
import ProfileInfo from "@/components/profile/ProfileInfo.vue";
import Follow from "@/components/profile/Follow.vue";

export default {
  name: "profile",
  components: {
    ProfileInfo,
    Follow
  },
  fetch({ store }) {
    store.dispatch("users/loadFollowings");
    store.dispatch("users/loadFollowers");
  },
  beforeDestroy(){
    this.$store.commit("users/resetFollowings")
    this.$store.commit("users/resetFollowers")
  },
  computed: {
    followings() {
      return this.$store.state.users.followings;
    },
    followers() {
      return this.$store.state.users.followers;
    },
    hasMoreFollowings() {
      return this.$store.state.users.hasMoreFollowings;
    },
    hasMoreFollowers() {
      return this.$store.state.users.hasMoreFollowers;
    }
  },
  methods: {
    async removeFollowing(id) {
      try {
        await this.$store.dispatch("users/removeFollowing", {
          id
        });
      } catch (e) {
        console.log(e);
      }
    },
    async removeFollower(id) {
      try {
        await this.$store.dispatch("users/removeFollower", {
          id
        });
      } catch (e) {
        console.log(e);
      }
    },
    async loadFollowings() {
      if (this.hasMoreFollowings) {
        this.$store.dispatch("users/loadFollowings");
      }
    },
    async loadFollowers() {
      if (this.hasMoreFollowers) {
        this.$store.dispatch("users/loadFollowers");
      }
    }
  },
  head() {
    return {
      title: "프로필"
    };
  },
  middleware: "authenticated"
};
</script>

<style scoped>
</style>