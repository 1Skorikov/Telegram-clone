import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chats: [
      {
        chatID: 0,
        unreadMessagesCount: 1,
        muted: false,
        pinned: false,
        sender: {
          name: "IT Юмор",
          lastSeen: "14:02",
          photoURL: require("../assets/img/user.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 1,
        unreadMessagesCount: 0,
        muted: false,
        pinned: true,
        sender: {
          name: "Correct messages demo",
          lastSeen: "05:21",
          photoURL: require("../assets/img/user-1.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: ""
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: ""
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: ""
          }
        ]
      },
      {
        chatID: 2,
        unreadMessagesCount: 0,
        muted: false,
        pinned: false,
        sender: {
          name: "John smith",
          lastSeen: "02:20",
          photoURL: require("../assets/img/user-2.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 3,
        unreadMessagesCount: 1,
        muted: true,
        pinned: false,
        sender: {
          name: "Леша 3981",
          lastSeen: "12:20",
          photoURL: require("../assets/img/user-3.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 4,
        unreadMessagesCount: 3,
        muted: false,
        pinned: false,
        sender: {
          name: "John smith",
          lastSeen: "08:22",
          photoURL: require("../assets/img/user-4.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 5,
        unreadMessagesCount: 0,
        muted: true,
        pinned: false,
        sender: {
          name: "Леша 3981",
          lastSeen: "22:20",
          photoURL: require("../assets/img/user.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 6,
        unreadMessagesCount: 2,
        muted: false,
        pinned: false,
        sender: {
          name: "Леша 3981",
          lastSeen: "16:20",
          photoURL: require("../assets/img/user-1.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 7,
        unreadMessagesCount: 1,
        muted: false,
        pinned: true,
        sender: {
          name: "John smith",
          lastSeen: "13:53",
          photoURL: require("../assets/img/user-2.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 8,
        unreadMessagesCount: 0,
        muted: false,
        pinned: true,
        sender: {
          name: "Test pinned",
          lastSeen: "23:20",
          photoURL: require("../assets/img/user-3.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 9,
        unreadMessagesCount: 0,
        muted: false,
        pinned: false,
        sender: {
          name: "Test pinned 2",
          lastSeen: "13:22",
          photoURL: require("../assets/img/user-4.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor. 10",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 10,
        unreadMessagesCount: 0,
        muted: false,
        pinned: true,
        sender: {
          name: "Alex",
          lastSeen: "13:14",
          photoURL: ""
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 11,
        unreadMessagesCount: 1,
        muted: false,
        pinned: false,
        sender: {
          name: "IT Юмор",
          lastSeen: "14:02",
          photoURL: require("../assets/img/user.png")
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      }
    ]
  },

  mutations: {
    setRandomTime(state) {
      state.chats.forEach(element => {
        element.messages.map(i => {
          i.time = generateDate(new Date(2012, 0, 1), new Date());
        });
      });

      function generateDate(start, end) {
        return new Date(
          start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );
      }
    }
  },

  actions: {},

  getters: {
    getChats(state) {
      return state.chats.sort((a, b) => {
        return a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1;
      });
    },

    getChatById: state => id => {
      return state.chats.filter(item => item.chatID === id);
    },

    getChatsSorterByDate() {}
  }
});
