import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "../views/Main";
import SingleProject from "../views/SingleProject";
import Login from "../views/Login";
import Register from "../views/Register";


Vue.use(VueRouter)

const routes = [
  {
    route: '/auth',
    name: 'Login',
    component: Login,
  },
  {
    route: '/auth/reg',
    name: 'Register',
    component: Register
  },
  {
    route: '/',
    name: 'Projects',
    component: Main
  },
  {
    route: '/project/:id',
    name: 'Project',
    component: SingleProject
  },
]

const router = new VueRouter({
  routes
})

export default router
