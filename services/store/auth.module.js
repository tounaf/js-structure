// action types
import ApiService from "../api.service";

export const VERIFY_AUTH = "verifyAuth";

// mutation types
export const SET_AUTH = "setAuth";
export const PURGE_AUTH = "purgeAuth";

export const store = {
  state: {
    user: null,
    authenticated: null,
  },
  getters: {
    currentUser(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.authenticated;
    },
  },
  actions: {
    [VERIFY_AUTH]({ commit }) {
      ApiService.setHeader();
      ApiService.get("/account")
        .then((response) => {
          if(response.data.success){
            commit(SET_AUTH, response.data.data);
          } else {
            commit(PURGE_AUTH);
          }
        })
        .catch(() => {
          commit(PURGE_AUTH);
        });
    },
  },
  mutations: {
    [SET_AUTH](state, user) {
      state.authenticated = true;
      state.user = user
    },
    [PURGE_AUTH](state) {
      state.authenticated = false;
      state.user = null
    }
  }
}

export default store
