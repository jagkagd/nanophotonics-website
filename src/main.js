// @flow

import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import router from './routes/index-single.js'

Vue.use(Router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    render: h => h(App)
})
