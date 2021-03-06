import { v4 as uuid } from "uuid";

export const sort_functions = {
  most: (a, b) => b.points - a.points || b.lastVoteTime - a.lastVoteTime,
  less: (a, b) => a.points - b.points || b.lastVoteTime - a.lastVoteTime,
};

const state = () => ({
  filterOption: "",
  list: [],
});

const getters = {
  itemsByDate(state) {
    return [...state.list].sort((a, b) => b.createdTime - a.createdTime);
  },
  itemById: (state) => (id) => {
    const index = state.list.findIndex((item) => item.id === id);
    return state.list[index];
  },
  filteredList(state, getters) {
    if (state.filterOption !== "") {
      return [...state.list].sort(sort_functions[state.filterOption]);
    }
    return getters.itemsByDate;
  },
};

const mutations = {
  GET_LIST(state, list) {
    state.list = list;
  },
  ADD_ITEM(state, item) {
    state.list.push(item);
  },
  UP_VOTE(_state, item) {
    item.points++;
    item.lastVoteTime = new Date().getTime();
  },
  DOWN_VOTE(_state, item) {
    if (item.points > 0) {
      item.points--;
    }
    item.lastVoteTime = new Date().getTime();
  },
  CHANGE_FILTER(state, option) {
    state.filterOption = option;
  },
  REMOVE_ITEM(state, id) {
    state.list = state.list.filter((item) => item.id !== id);
  },
};

const actions = {
  saveList({ state }) {
    localStorage.setItem("list", JSON.stringify(state.list));
  },
  addItem({ commit, state }, item) {
    (item = {
      ...item,
      id: uuid(),
      points: 0,
      createdTime: new Date().getTime(),
    }),
      localStorage.setItem("list", JSON.stringify([...state.list, item]));
    commit("ADD_ITEM", item);
  },
  getList({ commit }) {
    commit("GET_LIST", JSON.parse(localStorage.getItem("list")) || []);
  },
  upVote({ commit, dispatch, getters }, id) {
    commit("UP_VOTE", getters.itemById(id));
    dispatch("saveList");
  },
  downVote({ commit, dispatch, getters }, id) {
    commit("DOWN_VOTE", getters.itemById(id));
    dispatch("saveList");
  },
  removeItem({ commit, dispatch }, id) {
    commit("REMOVE_ITEM", id);
    dispatch("saveList");
  },
  changeFilter({ commit }, option) {
    commit("CHANGE_FILTER", option);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
