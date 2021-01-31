<template>
  <div>
    <p>{{ alertMessage }}</p>
    {{ parentMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Children extends Vue {
  @Prop() parentMessage?: string;
  alertMessage: string = "";
  @Watch("parentMessage")
  update(value: string, oldValue: string) {
    console.log("value", value);
    console.log("oldValue", oldValue);
    this.alertMessage = "메세지를 업데이트 했습니다.";
  }
}
</script>

<style scoped>
</style>