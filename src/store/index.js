import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("addUser", payload);
    },
    logout({ commit }) {
      commit("removeUser");
    },
  },
});
