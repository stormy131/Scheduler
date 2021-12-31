import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "../views/Main";
import SingleProject from "../views/SingleProject";
import Login from "../views/Login";
import Register from "../views/Register";


Vue.use(VueRouter);

const routes = [
    {
        path: '/auth',
        name: 'Login',
        component: Login,
    },
    {
        path: '/auth/reg',
        name: 'Register',
        component: Register
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Main
    },
    {
        path: '/projects/:id',
        name: 'Project',
        component: SingleProject
    },
];

const router = new VueRouter({
    routes,
});

export default router;
