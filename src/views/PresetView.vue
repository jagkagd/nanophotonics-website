<template lang="pug">
div
    #preset-content
        h1.viewTitle(v-show="showTitle") {{ title }}
        hr(v-show="showTitle")
        transition(
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
        )
            router-view#sub-view-content
    aside#sub-nav-container
        sub-nav#sub-nav(:parentName="parentName" v-bind:menuName="menuName")
</template>

<script>

import SubNav from 'components/SubNav.vue'
import {keyMetaData} from '@/meta-data'
import * as R from 'ramda'

export default {
    name: 'PresetView',
    computed: {
        title () {
            return R.pathOr('', [this.menuName, 'title', this.la])(R.pathOr(keyMetaData, [this.parentName, 'children'])(keyMetaData))
        },
        parentName () {
            return this.routeInfo[0].name
        },
        menuName () {
            return this.$store.state.menuName || this.routeInfo[1].name
        },
        showTitle () {
            return this.$store.state.showTitle
        }
    },
    components: {
        SubNav
    }
}
</script>

<style lang="stylus">
@import '~static/animate.min.css'

#preset-content
    position: relative
    z-index: 10
    padding: 0 10px
    min-height: 500px
    box-shadow: 10px 0 10px -10px black

#sub-view-content
    font-size: 14px
    line-height: 150%

.viewTitle
    font-size: 18px
    font-weight: bold

#sub-nav-container
    position: absolute
    z-index: 0
    left: 100%
    top: 0
    height: 100%
    width: (15/70*100)%
    margin: 0
    padding: 20px 0
</style>
