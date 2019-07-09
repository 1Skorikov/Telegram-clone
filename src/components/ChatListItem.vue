<template>
  <div class="chat-list-item" :class="{ pinned: chatData.pinned }">
    <div class="chat-list-item__image">
      <img :src="chatData.sender.photoURL" alt="user-avatar" />
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
            v-if="chatData.messageReaded"
            src="@/assets/img/double-tick.png"
            class="chat-list-item__tick"
            alt="readed"
          />
          <span class="chat-list-item__time">
            {{ chatData.lastMessageTime }}
          </span>
        </div>
      </header>

      <p class="chat-list-item__message">
        {{ chatData.sender.message }}
      </p>
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
  }
};
</script>

<style lang="scss" scoped>
.chat-list-item {
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;

  &.pinned {
    background-color: #f7f7f7;
  }

  &.pinned .chat-list-item__content {
    border-bottom-color: #d9d9d9;
  }

  &.pinned:first-child {
    background-color: red;
  }
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
</style>
