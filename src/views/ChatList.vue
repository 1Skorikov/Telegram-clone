<template>
  <div class="chat-list-page">
    <page-header>
      <template #left-icon>
        <i class="fas fa-bars"></i>
      </template>

      <template #content>
        <h1>Telegram</h1>
      </template>

      <template #right-icon>
        <i class="fas fa-search"></i>
      </template>
    </page-header>

    <chat-list-item
      v-for="(chat, index) in chats"
      :key="index"
      :chat-data="chat"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ChatListItem from "@/components/ChatListItem";

export default {
  name: "ChatList",
  components: {
    PageHeader,
    ChatListItem
  },
  computed: {
    chats() {
      return this.$store.getters.getChats;
    }
  }
};
</script>
