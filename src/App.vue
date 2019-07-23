<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/*
TODO: order messages by sended time,
      remove message from sender object and get last message from messages array,
      group messages if they several in a block from one user,
      tick icon on sended and read message,
      routing animation
*/
import "@/assets/styles/main.scss";

export default {
  name: "App"
};
</script>
