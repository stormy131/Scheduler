import Vue from 'vue';
import './plugins/sso'
import VueRouter from 'vue-router';
import SSO from 'vue-sso'
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  methods: {
    request(url, method='GET', data={}) {
      return fetch(url,{
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
          .then(result => result.json())
          .catch(err => console.error(err));
    }
  }
}).$mount('#app')


Vue.use(VueRouter)
Vue.use(SSO, {
  baseURL: '/api',
  authEndpoint: '/auth/login',
  key: 'scheduler'
})