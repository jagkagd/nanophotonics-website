import Vue from 'vue'

export const SubView = Vue.extend({
    mounted () {
        this.$store.commit('changeMenuName', '')
    }
})

