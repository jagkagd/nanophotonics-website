<template lang="pug">
waterfall(:line-gap="10")
    waterfall-slot(v-for="id in info.number" key="id" v-bind:width="320" v-bind:height="320")
        img(:src="require('images/beyond_light/'+info.path+'/'+info.path+'-'+id+'.jpg')" width="320" height="320")
</template>

<script>
// @flow

import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

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
    components: {
        Waterfall,
        WaterfallSlot
    },
    watch: {
        '$route' (to, from) {
            this.$store.commit('changeMenuName', this.activity)
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>

