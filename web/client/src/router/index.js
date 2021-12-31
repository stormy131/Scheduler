import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "../views/Main";
import SingleProject from "../views/SingleProject";
import Login from "../views/Login";
import Register from "../views/Register";


Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Main
    },
    {
        path: '/project/:id',
        name: 'Project',
        component: SingleProject
    },
]

const router = new VueRouter({
    routes,
})

export default router
