import Vue from "vue";
import Router from "vue-router";
import ChatList from "./views/ChatList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "chat-list",
      component: ChatList
    }
  ]
});
