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
    right: 4%
    top: 30%

    width: 10%

    padding: 0
    margin: 0
    list-style: none
    font-size: 14px
    li
        border: 1px solid base0
        color: base4
        text-align: center
        margin: 2px 0
        a
            padding: 5px
            display: table
            border-radius: 3px
            width: 100%
            box-shadow: 2px 2px 4px #888
        a:link, :visited
            background-color: base3
        a:active, :hover
            background-color: base0

</style>
