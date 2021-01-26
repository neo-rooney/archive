<template>
  <div>
    {{ parentMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Children extends Vue {
  @Prop() parentMessage?: string;
}
</script>

<style scoped>
</style>