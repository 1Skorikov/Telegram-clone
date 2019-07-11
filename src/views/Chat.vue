<template>
  <div class="chat-page">
    <page-header>
      <template #left-icon>
        <router-link to="/"><i class="fas fa-arrow-left"></i></router-link>
      </template>

      <template #content>
        <div class="chat-page__user-info">
          <div class="chat-page__user-photo">
            <img
              v-if="chatData.sender.photoURL"
              :src="chatData.sender.photoURL"
              alt="avatar"
            />
            <img
              v-else
              src="@/assets/img/avatar-placeholder.png"
              alt="avatar"
            />
          </div>

          <div class="chat-page__user-text">
            <h1 class="chat-page__user-title">{{ chatData.sender.name }}</h1>
            <p class="chat-page__user-last-seen">
              last seen at {{ chatData.sender.lastSeen }}
            </p>
          </div>
        </div>
      </template>

      <template #right-icon>
        <i class="fas fa-ellipsis-v"></i>
      </template>
    </page-header>

    <div class="chat-page__messages">
      <chat-message
        v-for="(message, index) in chatData.messages"
        :key="index"
        :message="message"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ChatMessage from "@/components/ChatMessage";

export default {
  name: "chat",
  components: {
    PageHeader,
    ChatMessage
  },
  computed: {
    chatData() {
      return this.$store.getters.getChatById(+this.$route.params.chatID)[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  padding: 6px 18px;
}

.fas {
  font-size: 14px;
}

.chat-page {
  display: flex;
  align-items: flex-end;
  height: 100%;
  background-image: url("../assets/img/chat-background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.chat-page__user-info {
  display: flex;
  align-items: center;
  margin-left: 25px;
}

.chat-page__user-photo {
  display: flex;
  align-items: center;
  margin-right: 10px;

  img {
    width: 35px;
    height: 35px;
  }
}

.chat-page__user-title {
  margin-bottom: 4px;
  font-size: 15px;
  letter-spacing: 0.6px;
}

.chat-page__user-last-seen {
  font-size: 12px;
  letter-spacing: 0.2px;
  color: #d2e9f9;
}

.chat-page__messages {
  width: 100%;
  margin-bottom: 10px;
}
</style>
