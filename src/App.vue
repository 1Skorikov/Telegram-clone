<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/*
TODO:  make variables for colors and etc,
      place data to vuex, filter for cropp message in list item,
      avatar placeholder if user does not have,
      may be use local images for user avatars,
      добавить галочки прочитанных,
      удалить лишние картинки с асетсов,
      заменить имена и текст,
      доделать закрепленние сообщения
*/
import "@/assets/styles/main.scss";

export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
