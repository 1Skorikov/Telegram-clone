import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chats: [
      {
        chatID: 0,
        lastMessageTime: "15:10",
        unreadMessagesCount: 1,
        muted: false,
        pinned: false,
        sender: {
          name: "IT Юмор",
          message: "Когда попросили рассказать lorem ipsum dolor sit amet.",
          lastSeen: "14:02",
          photoURL:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 1,
        lastMessageTime: "20:14",
        unreadMessagesCount: 0,
        muted: false,
        pinned: true,
        sender: {
          name: "Correct messages demo",
          message: "Lorem ipsum dolor sit amet.",
          lastSeen: "05:21",
          photoURL:
            "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: ""
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: ""
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: ""
          }
        ]
      },
      {
        chatID: 2,
        lastMessageTime: "22:11",
        unreadMessagesCount: 0,
        muted: false,
        pinned: false,
        sender: {
          name: "John smith",
          message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          lastSeen: "02:20",
          photoURL:
            "https://i.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 3,
        lastMessageTime: "18:22",
        unreadMessagesCount: 1,
        muted: true,
        pinned: false,
        sender: {
          name: "Леша 3981",
          message: "Купи хлеб",
          lastSeen: "12:20",
          photoURL:
            "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 4,
        lastMessageTime: "22:11",
        unreadMessagesCount: 3,
        muted: false,
        pinned: false,
        sender: {
          name: "John smith",
          message: "Lorem ipsum dolor sit amet.",
          lastSeen: "08:22",
          photoURL:
            "https://i.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 5,
        lastMessageTime: "18:22",
        unreadMessagesCount: 0,
        muted: true,
        pinned: false,
        sender: {
          name: "Леша 3981",
          message: "Купи хлеб. Lorem ipsum dolor sit amet.",
          lastSeen: "22:20",
          photoURL: "http://chittagongit.com/download/403527"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 6,
        lastMessageTime: "Tue",
        unreadMessagesCount: 2,
        muted: false,
        pinned: false,
        sender: {
          name: "Леша 3981",
          message: "Купи хлеб",
          lastSeen: "16:20",
          photoURL:
            "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 7,
        lastMessageTime: "Tue",
        unreadMessagesCount: 1,
        muted: false,
        pinned: true,
        sender: {
          name: "John smith",
          message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          lastSeen: "13:53",
          photoURL:
            "https://i.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 8,
        lastMessageTime: "Mon",
        unreadMessagesCount: 0,
        muted: false,
        pinned: true,
        sender: {
          name: "Test pinned",
          message: "Купи хлеб",
          lastSeen: "23:20",
          photoURL: "http://chittagongit.com/download/403527"
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 9,
        lastMessageTime: "Fri",
        unreadMessagesCount: 0,
        muted: false,
        pinned: false,
        sender: {
          name: "Test pinned 2",
          message: "Test chat message",
          lastSeen: "13:22",
          photoURL: "https://longfordpc.com/images/pastor-clipart-priest-8.png"
        },
        messages: [
          {
            text: "Lorem ipsum dolor. 10",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      },
      {
        chatID: 10,
        lastMessageTime: "20:21",
        unreadMessagesCount: 0,
        muted: false,
        pinned: true,
        sender: {
          name: "Alex",
          message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          lastSeen: "13:14",
          photoURL: ""
        },
        messages: [
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          },
          {
            text: "Lorem ipsum dolor.",
            time: "12:30",
            sended: true,
            readed: false,
            author: "current_user"
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getChats(state) {
      return state.chats.sort((a, b) => {
        return a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1;
      });
    },
    getChatById: state => id => {
      return state.chats.filter(item => item.chatID === id);
    }
  }
});
