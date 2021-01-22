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
        checkUser({ commit }) {
            return http.post('/check').then(res => {
                commit('setUser', res.data.user);
                return res;
            });
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit('setUser', null);
        },
    },
});

export default store;