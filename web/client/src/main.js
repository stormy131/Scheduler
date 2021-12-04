import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false
const routes = [
  {route: '/login', component: Login},
  {route: '/register', component: Register},
  {route: '/index', component: Project},
  {route: '/project/:id', component: Project},
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


Vue.use(VueRouter)