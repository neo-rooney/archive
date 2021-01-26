<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <children :parentMessage="message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import children from "@/components/children.vue";

@Component({
  components: {
    children,
  },
})
export default class Home extends Vue {
  message: string = "hellow world";
}
</script>
