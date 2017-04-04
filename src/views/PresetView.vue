<template lang="pug">
div
    #preset-content
        h1.viewTitle {{ title }}
        hr
        router-view#sub-view-content
    #sub-nav-container
        sub-nav#sub-nav(:parentName="parentName" v-bind:menuName="menuName")
</template>

<script>
// @flow

import SubNav from 'components/SubNav.vue'
import {keyRouteData} from 'static/meta-data'

export default {
    name: 'PresetView',
    computed: {
        title () {
            const parent = this.parentName ? (keyRouteData[this.parentName].children || keyRouteData) : keyRouteData
            return parent[this.menuName] ? (parent[this.menuName].title[this.la] || '') : ''
        },
        parentName () {
            return this.routeInfo[0].name
        },
        menuName () {
            return this.$store.state.menuName || this.routeInfo[1].name
        }
    },
    components: {
        SubNav
    }
}
</script>

<style lang="stylus">

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
