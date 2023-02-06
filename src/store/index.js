import { createStore } from "vuex";
import { getCategories } from "../app/api";

export default createStore({
  state: {
    user: null,
    categories: null,
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload;
    },
    removeUser(state) {
      state.user = null;
    },
    changeCategories(state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("addUser", payload);
    },
    logout({ commit }) {
      commit("removeUser");
    },
    async fetchCategories({ commit }) {
      const data = await getCategories();
      commit("changeCategories", data);
    },
  },
});
