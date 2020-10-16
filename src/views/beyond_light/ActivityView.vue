<template lang="pug">
    img(:src="require('images/beyond_light/'+ activity + '.jpg')")
</template>

<script>

export default {
    name: 'BeyondLight',
    computed: {
        activity () {
            return this.$route.params.activity
        },
        info () {
            return this.routeInfo[1]
        }
    },
    mounted () {
        this.$store.commit('changeMenuName', this.activity)
    },
    watch: {
        '$route' (to, from) {
            this.$store.commit('changeMenuName', this.activity)
        }
    }
}
</script>

<style lang="stylus" scoped>

img
    width: 95%
    
</style>
