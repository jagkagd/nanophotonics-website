export default {
    install (Vue, options) {
        Vue.mixin({
            computed: {
                la () {
                    return this.$store.state.lang
                }
            }
        })
    }
}
