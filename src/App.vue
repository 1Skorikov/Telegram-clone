<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/*
TODO: make variables for colors and etc,
      use local images for user avatars, fonts, icons
      order messages by sended time,
      remove message from sender object and get last message from messages array,
      group messages if they several in a block from one user,
      tick icon on sended and readed message,
      routing animation
*/
import "@/assets/styles/main.scss";

export default {
  name: "App"
};
</script>
