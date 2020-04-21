<template>
  <div>
    <ProfileInfo />
    <Follow title="팔로잉" :users="following" :remove="removeFollowing" />
    <Follow title="팔로워" :users="follower" :remove="removeFollower" />
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
  computed: {
    following() {
      return this.$store.state.users.following;
    },
    follower() {
      return this.$store.state.users.follower;
    }
  },
  methods: {
    async removeFollowing(id) {
      try {
        await this.$store.dispatch("users/removeFollowing",{
          id
        });
      } catch (e) {
        console.log(e);
      }
    },
    async removeFollower(id) {
      try {
        await this.$store.dispatch("users/removeFollower",{
          id
        });
      } catch (e) {
        console.log(e);
      }
    }
  },
  head(){
    return {
      title:"프로필"
    }
  },
  middleware:'authenticated'
};
</script>

<style scoped>
</style>