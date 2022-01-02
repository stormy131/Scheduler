import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, payload) {
      state.status = 'success';
      state.token = payload.token;
      state.user = payload.user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
      state.user = {};
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({
          url: '/auth',
          data: user,
          method: 'POST'
        })
          .then(r => {
            const token = r.data.token;
            const user = r.data.user;
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            axios.defaults.headers.common.usertoken = token;
            commit('auth_success', { token, user });
            resolve(r);
          })
          .catch(err => {
            commit('auth_error');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: '/auth/reg', data: user, method: 'POST' })
          .then(resp => {
            resolve(resp);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete axios.defaults.headers.usertoken;
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
  }
});
