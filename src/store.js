import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chats: [
      {
        chatID: 0,
        lastMessageTime: "15:10",
        messageReaded: false,
        muted: false,
        pinned: false,
        sender: {
          name: "IT Юмор",
          message: "Когда попросили рассказать",
          photoURL:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png"
        }
      },
      {
        chatID: 1,
        lastMessageTime: "20:14",
        messageReaded: true,
        muted: false,
        pinned: true,
        sender: {
          name: "Web-developer",
          message: "Lorem ipsum dolor sit amet.",
          photoURL:
            "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        }
      },
      {
        chatID: 2,
        lastMessageTime: "22:11",
        messageReaded: false,
        muted: false,
        pinned: false,
        sender: {
          name: "John smith",
          message: "Lorem ipsum dolor sit amet.",
          photoURL:
            "https://i.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png"
        }
      },
      {
        chatID: 3,
        lastMessageTime: "18:22",
        messageReaded: true,
        muted: true,
        pinned: false,
        sender: {
          name: "Леша 3981",
          message: "Купи хлеб",
          photoURL:
            "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        }
      },
      {
        chatID: 4,
        lastMessageTime: "22:11",
        messageReaded: false,
        muted: false,
        pinned: false,
        sender: {
          name: "John smith",
          message: "Lorem ipsum dolor sit amet.",
          photoURL:
            "https://i.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png"
        }
      },
      {
        chatID: 5,
        lastMessageTime: "18:22",
        messageReaded: false,
        muted: true,
        pinned: false,
        sender: {
          name: "Леша 3981",
          message: "Купи хлеб",
          photoURL: "http://chittagongit.com/download/403527"
        }
      },
      {
        chatID: 6,
        lastMessageTime: "Tue",
        messageReaded: false,
        muted: false,
        pinned: false,
        sender: {
          name: "Леша 3981",
          message: "Купи хлеб",
          photoURL:
            "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        }
      },
      {
        chatID: 7,
        lastMessageTime: "Tue",
        messageReaded: true,
        muted: false,
        pinned: true,
        sender: {
          name: "John smith",
          message: "Lorem ipsum dolor sit amet.",
          photoURL:
            "https://i.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png"
        }
      },
      {
        chatID: 8,
        lastMessageTime: "Mon",
        messageReaded: false,
        muted: false,
        pinned: true,
        sender: {
          name: "Test pinned",
          message: "Купи хлеб",
          photoURL: "http://chittagongit.com/download/403527"
        }
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
    }
  }
});
