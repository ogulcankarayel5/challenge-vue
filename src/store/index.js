import { createStore } from "vuex";

export default createStore({
  state: {
    list: [],
  },
  getters: {
    allItems(state) {
      return [...state.list].sort((a, b) => b.id - a.id);
    },
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list;
    },
    ADD_ITEM(state, item) {
      console.log(item);
      state.list.push(item);
    },
  },
  actions: {
    addItem({ commit, state }, item) {
      (item = { ...item, id: new Date().getTime(), points: 0 }),
        localStorage.setItem("list", JSON.stringify([...state.list, item]));
      commit("ADD_ITEM", item);
    },
    setList({ commit }) {
      commit("SET_LIST", JSON.parse(localStorage.getItem("list")) || []);
    },
  },
  modules: {},
});
