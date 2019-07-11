<template>
  <div class="chat-list-page">
    <page-header>
      <template #left-icon>
        <i class="fas fa-bars"></i>
      </template>

      <template #content>
        <h1 class="chat-list-page__title">Telegram</h1>
      </template>

      <template #right-icon>
        <i class="fas fa-search"></i>
      </template>
    </page-header>

    <div class="chat-list-page__pinned-group">
      <chat-list-item
        v-for="(chat, index) in pinnedChats"
        :key="index"
        :chat-data="chat"
      />
    </div>

    <chat-list-item
      v-for="(chat, index) in defaultChats"
      :key="index"
      :chat-data="chat"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ChatListItem from "@/components/ChatListItem";
import { mapGetters } from "vuex";

export default {
  name: "chat-list",
  components: {
    PageHeader,
    ChatListItem
  },
  computed: {
    ...mapGetters(["getChats"]),
    defaultChats() {
      return this.getChats.filter(x => x.pinned === false);
    },
    pinnedChats() {
      return this.getChats.filter(x => x.pinned === true);
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-list-page__title {
  margin-left: 34px;
}

.chat-list-page__pinned-group {
  border-bottom: 1px solid #d9d9d9;
}

::v-deep .pinned:last-child .chat-list-item__content {
  border-bottom: none;
}
</style>
