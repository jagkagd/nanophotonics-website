<template lang="pug">
ul
    li(v-for="item in subMenu" v-bind:class="{currentMenu: item.k.name === menuName}" )
        router-link(:to="item.routerTo") {{ item.li[la] }}
</template>

<script>
// @flow

import {keyMenuData} from 'static/meta-data'

export default {
    name: 'SubNav',
    props: {
        parentName: String,
        menuName: String
    },
    computed: {
        subMenu () {
            return this.parentName ? (keyMenuData[this.parentName].subMenu || []) : []
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

ul
    position: fixed
    right: 5%
    top: 30%

    width: 20%

    padding: 0
    margin: 0
    list-style: none
    font-size: 14px
    li
        border: 1px solid base0
        color: base4
        a
            width: 100%
            height: 100%
            padding: 5px
            display: table
        a:link, :visited
            background-color: base3
        a:active, :hover
            background-color: base0

</style>
