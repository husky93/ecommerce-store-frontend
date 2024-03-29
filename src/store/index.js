import { createStore } from "vuex";
import { getCategories } from "../app/api";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    user: null,
    categories: null,
    cart: [],
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
    addToCart(state, payload) {
      state.cart = [...state.cart, { ...payload, cart_id: uuidv4() }];
    },
    removeFromCart(state, payload) {
      state.cart = state.cart.filter((item) => item.cart_id !== payload);
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("addUser", payload);
    },
    logout({ commit }) {
      commit("removeUser");
    },
    addItemToCart({ commit }, payload) {
      commit("addToCart", payload);
    },
    removeItemFromCart({ commit }, payload) {
      commit("removeFromCart", payload);
    },
    async fetchCategories({ commit }) {
      const data = await getCategories();
      commit("changeCategories", data);
    },
  },
});
