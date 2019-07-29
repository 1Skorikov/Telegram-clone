<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "@/assets/styles/main.scss";

export default {
  name: "App",

  beforeCreate() {
    this.$store.commit("setRandomTime");
  }
};
</script>
