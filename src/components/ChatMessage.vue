<template>
  <div
    class="chat-message-wrapper"
    :class="{ 'chat-message-wrapper--my': message.author === 'current_user' }"
  >
    <div
      class="chat-message"
      :class="{ 'chat-message--my': message.author === 'current_user' }"
    >
      <p class="chat-message__text">{{ message.text }}</p>

      <div class="chat-message__info">
        <div class="chat-message__time">17:28</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat-message",
  props: {
    message: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-message-wrapper {
  display: flex;
  justify-content: flex-start;
  width: 100%;

  &.chat-message-wrapper--my {
    justify-content: flex-end;
  }
}

.chat-message {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-bottom: 4px;
  margin-left: 10px;
  padding: 10px 7px 3px 7px;
  border-radius: 0.4em;
  border-bottom-left-radius: 0;
  background-color: #fff;
}

.chat-message:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-right: 8px solid transparent;
  border-top: 8px solid transparent;
  border-right-color: #fff;
  border-left: 0;
  border-bottom: 0;
  margin-top: -4px;
  margin-left: -5px;
}

.chat-message--my {
  margin-left: 0;
  margin-right: 10px;
  border-bottom-left-radius: 0.4em;
  background-color: #effedd;

  &:after {
    content: "";
    left: auto;
    right: 0;
    border: 8px solid transparent;
    border-left-color: #effedd;
    border-right: 0;
    border-bottom: 0;
    margin-right: -4px;
  }

  .chat-message__time {
    color: #77ad62;
  }
}

.chat-message__text {
  margin-right: 5px;
  font-size: 14px;
}

.chat-message__info {
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-top: 8px;
}

.chat-message__time {
  font-size: 10px;
  color: #a1aab1;
}

.chat-message__read {
  display: flex;
  align-items: flex-end;

  img {
    width: 12px;
  }
}
</style>
