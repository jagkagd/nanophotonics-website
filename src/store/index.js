import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: 'en',
        menuName: '',
        showTitle: true,
    },
    mutations: {
        switchLang (state) {
            state.lang = (state.lang === 'en') ? 'zh' : 'en'
        },
        changeMenuName (state, name) {
            state.menuName = name
            if(name === 'after_graduation'){
                state.showTitle = false;
            }else{
                state.showTitle = true;
            }
        },
    }
})
