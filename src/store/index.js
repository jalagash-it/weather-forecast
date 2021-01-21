import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)

import http from '../services/http';

const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        async checkUser(context) {
            return http.post('/check').then(res => {
                context.commit('setUser', res.data.user);
                return res;
            });
        }
    },
    getters: {
        getUser: state => () => {
            console.log('debug')
            return state.user;
        }
    }
});

export default store;