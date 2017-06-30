/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

let state = {};
try {
  const localStorageState = window.localStorage.getItem('state');
  state = JSON.parse(localStorageState);
  if (!state || typeof state !== 'object') {
    state = {};
  }
}
catch(err) {
  console.log(err, 'couldn\'t parse state from localStorage');
  state = {};
}
state.ui = state.ui || {};
state.ui.currentForm = state.ui.currentForm || {};
state.ui.currentForm.fields = state.ui.currentForm.fields || {};
const store = new Vuex.Store({
  state,
  mutations: {
    UPDATE_FORMDATA(state, payload) {
      state.ui.currentForm.fields[payload.path] = payload.data;
    }
  }
});

store.subscribe((mutation, state) => {
  window.localStorage.setItem('state', JSON.stringify(state));
});

export default store;
