import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main';
import SingleProject from '../views/SingleProject';
import Login from '../views/Login';
import Register from '../views/Register';
import store from '../store';


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
        component: Main,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/projects/:id',
        name: 'Project',
        component: SingleProject,
        meta: {
            requiresAuth: true
        }
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/auth')
    } else {
        next()
    }
})

export default router;
