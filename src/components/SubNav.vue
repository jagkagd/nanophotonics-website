<template lang="pug">
ul
    li(v-for="item in subMenu")
        router-link(:to="item.routerTo" v-bind:class="{currentMenu: item.k.name === menuName}") {{ item.li[la] }}
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
    z-index: 0
    position: fixed
    right: 0
    top: 30%

    width: 15%
    height: 400px
    
    padding: 0
    margin: 0
    font-size: 14px
    list-style: none
    li:first-child
        margin-top: 4em
    li
        border: 1px solid base0
        color: base4
        text-align: center
        margin: 2px 0
        a
            line-height: 2em
            padding: 5px
            display: table
            border-radius: 3px
            width: 60%
            box-shadow: 2px 2px 4px #888
            background-color: base3
            transition: all .5s
        a:hover
            background-color: base0
            width: 75%

.currentMenu
    background-color: base0
    width: 75%

</style>
