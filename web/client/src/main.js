import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Project from './components/Project'

Vue.config.productionTip = false
const routes = [
  {route: '/login', component: Login},
  {route: '/register', component: Register},
  {route: '/index', component: Projects},
  {route: '/project/:id', component: Project},
];

const router = new VueRouter({
  routes
});

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