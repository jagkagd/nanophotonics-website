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
        menuName () {
            return this.$route.params.menuName
        },
        info () {
            return this.routeInfo[1]
        }
    },
    mounted () {
        this.$store.commit('changeMenuName', this.menuName)
    },
    components: {
        Waterfall,
        WaterfallSlot
    }
}
</script>

<style lang="stylus" scoped>
</style>

