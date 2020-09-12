<template>
  <div id="app">
    <header>
      <tool-bar></tool-bar>
    </header>
    <loading-bar :isShow="showBus" />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import LoadingBar from "./components/LoadingBar.vue";

import bus from "./utils/bus.js";
export default {
  components: {
    ToolBar,
    LoadingBar,
  },
  created() {
    bus.$on("start:spinner", () => (this.showBus = true));
    bus.$on("end:spinner", () => (this.showBus = false));
  },
  beforeDestroy() {
    bus.$off("start:spinner", () => (this.showBus = true));
    bus.$off("end:spinner", () => (this.showBus = false));
  },
  data() {
    return {
      showBus: false,
    };
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
