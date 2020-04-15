<template>
  <div>
    <ProfileInfo />
    <Following />
    <Follower />
  </div>
</template>

<script>
import ProfileInfo from "@/components/profile/ProfileInfo.vue";
import Following from "@/components/profile/Following.vue";
import Follower from "@/components/profile/Follower.vue";

export default {
  name: "profile",
  components: {
    ProfileInfo,
    Following,
    Follower
  }
};
</script>

<style scoped>
</style>