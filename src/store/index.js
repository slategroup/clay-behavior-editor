/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: JSON.parse(window.localStorage.getItem('state')),
  },
  mutations: {
    UPDATE_FORMDATA(state, payload) {
      state.data = payload.data;
    }
  }
});

store.subscribe((mutation, state) => {
  window.localStorage.setItem('state', JSON.stringify(state.data));
});

export default store;
