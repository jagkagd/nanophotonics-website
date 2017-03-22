<template lang="pug">
div
    h1.viewTitle {{ title }}
    router-view
    sub-nav(:parentName="parentName" v-bind:menuName="menuName")
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
            console.log(this.$store.state.menuName, this.routeInfo[1].name)
            return this.$store.state.menuName || this.routeInfo[1].name
        }
    },
    components: {
        SubNav
    }
}
</script>
