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
  mutations: {},
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
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
            resolve(r);
          })
          .catch(err => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: '/auth/reg', data: user, method: 'POST' })
          .then(resp => {
            const user = resp.data.user
            resolve([resp, user]);
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {}
});
