import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { fakeServer } from "./server"
import store from './store';
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

fakeServer()


new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')