import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
import store from '../store';
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: (to, from, next) => {
            store.dispatch('checkUser')
                .then(() => next())
                .catch(() => next('/login'));
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router