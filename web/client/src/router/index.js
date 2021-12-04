import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from "../components/Projects";
import Project from "../components/Project";
import Login from "../components/Login";
import Register from "../components/Register";


Vue.use(VueRouter)

const routes = [
  {
    route: '/login',
    name: 'Login',
    component: Login,
  },
  {
    route: '/register',
    name: 'Register',
    component: Register},
  {
    route: '/index',
    name: 'Projects',
    component: Projects
  },
  {
    route: '/project/:id',
    name: 'Project',
    component: Project
  },
]

const router = new VueRouter({
  routes
})

export default router
