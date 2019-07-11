<template>
  <div class="chat-list-item" :class="{ pinned: chatData.pinned }">
    <router-link
      :to="`/chat/${chatData.chatID}`"
      class="chat-list-item__link"
    />

    <div class="chat-list-item__image">
      <img
        v-if="chatData.sender.photoURL"
        :src="chatData.sender.photoURL"
        alt="user-avatar"
      />
      <img v-else src="@/assets/img/avatar-placeholder.png" alt="avatar" />
    </div>

    <div class="chat-list-item__content">
      <header class="chat-list-item__header">
        <div class="chat-list-item__header-item">
          <h2 class="chat-list-item__title">{{ chatData.sender.name }}</h2>
          <img
            v-if="chatData.muted"
            src="@/assets/img/icon-mute.png"
            class="chat-list-item__mute"
            alt="mute"
          />
        </div>

        <div class="chat-list-item__header-item">
          <img
            v-if="chatData.unreadMessagesCount === 0"
            src="@/assets/img/double-tick.png"
            class="chat-list-item__tick"
            alt="readed"
          />
          <span class="chat-list-item__time">
            {{ chatData.lastMessageTime }}
          </span>
        </div>
      </header>

      <footer class="chat-list-item__footer">
        <p class="chat-list-item__message">
          {{ chatData.sender.message | cropMessage }}
        </p>

        <span
          v-if="chatData.unreadMessagesCount > 0 || chatData.pinned"
          class="chat-list-item__right-icon"
          :class="{
            unread: chatData.unreadMessagesCount > 0,
            'unread--pinned':
              chatData.pinned && chatData.unreadMessagesCount > 0
          }"
        >
          <img
            v-if="chatData.pinned && chatData.unreadMessagesCount === 0"
            src="@/assets/img/icon-pin.png"
            alt="pin"
          />

          <strong v-if="chatData.unreadMessagesCount > 0">
            {{ chatData.unreadMessagesCount }}
          </strong>
        </span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat-list-item",
  props: {
    chatData: {
      type: Object,
      required: true
    }
  },
  filters: {
    cropMessage(value) {
      if (!value) return "";
      return value.length > 35 ? value.slice(0, 32) + "..." : value;
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-list-item {
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  background-color: #fff;
}

.chat-list-item__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.08);
  }
}

.pinned {
  background-color: #f7f7f7;
}

.pinned .chat-list-item__content {
  border-bottom-color: #d9d9d9;
}

.chat-list-item__image {
  display: flex;
  align-items: center;
  margin-right: 10px;

  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
  }
}

.chat-list-item__content {
  width: 100%;
  padding: 14px 12px 14px 0;
  border-bottom: 1px solid #f1f1f1;
}

.chat-list-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.chat-list-item__header-item {
  display: flex;
  align-items: center;
}

.chat-list-item__title {
  font-size: 15px;
  font-weight: 500;
  color: rgba(66, 68, 73, 255);
}

.chat-list-item__mute {
  width: 12px;
  margin-left: 2px;
}

.chat-list-item__tick {
  width: 15px;
  margin-right: 7px;
}

.chat-list-item__time {
  display: block;
  font-size: 11px;
  letter-spacing: 0.3px;
  color: rgba(149, 153, 156, 255);
}

.chat-list-item__message {
  font-size: 13px;
  letter-spacing: 0.3px;
  color: rgba(139, 141, 143, 255);
}

.chat-list-item__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-list-item__right-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #a8a8a8;
  border-radius: 50%;
  font-size: 11px;
  color: #fff;

  img {
    width: 10px;
  }

  &.unread {
    background-color: #4ecc5e;
    border-color: #4ecc5e;
  }

  &.unread--pinned {
    background-color: #c5c9cc;
    border-color: #c5c9cc;
  }
}
</style>
