import Vue from "vue";
import Router from "vue-router";
import ChatList from "./views/ChatList.vue";
import Chat from "./views/Chat.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "chat-list",
      component: ChatList
    },
    {
      path: "/chat/:chatID",
      name: "chat",
      component: Chat
    }
  ]
});
