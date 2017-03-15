import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: 'en'
    },
    mutations: {
        switchLang (state) {
            state.lang = (state.lang === 'en') ? 'zh' : 'en'
        }
    }
})
