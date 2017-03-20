// @flow

import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import router from './routes/index.js'
import store from './state/index.js'
import Utilities from './plugin/Utilities.js'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Utilities)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store,
    render: h => h(App)
})
