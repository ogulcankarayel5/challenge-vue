const state = () => ({
  toasts: [],
  modals: [],
});

const getters = {
  toasts(state) {
    return state.toasts;
  },
  activeModal(state) {
    return state.modals.length > 0 ? state.modals[0] : null;
  },
};

const mutations = {
  PUSH_TOAST(state, toast) {
    state.toasts.push({
      ...toast,
      id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
    });
  },
  REMOVE_TOAST(state, toast) {
    state.toasts = state.toasts.filter((toastItem) => {
      return toastItem.id !== toast.id;
    });
  },
  OPEN_MODAL(state, name) {
    state.modals.unshift(name);
  },
  CLOSE_MODAL(state, name) {
    state.modals = state.modals.filter((item) => item !== name);
  },
};

const actions = {
  pushToast({ commit }, toast) {
    commit("PUSH_TOAST", toast);
  },
  removeToast({ commit }, toast) {
    commit("REMOVE_TOAST", toast);
  },
  openActiveModal({ commit }, name) {
    commit("OPEN_MODAL", name);
  },
  closeModal({ commit }, name) {
    commit("CLOSE_MODAL", name);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
