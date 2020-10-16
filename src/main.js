import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
import utilities from './plugin/utilities.js'

Vue.config.devtools = process.env.NODE_ENV === 'development';

Vue.use(utilities);

/* eslint-disable no-new */
const app = new Vue({
    template: '<App/>',
    components: { App },
    router,
    store,
    render: h => h(App)
}).$mount('#app')

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
