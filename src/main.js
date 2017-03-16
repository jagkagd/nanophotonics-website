// @flow

import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import router from './routes/index.js'
import store from './state/index.js'
import i18n from './plugin/i18n.js'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(i18n)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store,
    render: h => h(App)
})
