<template lang="pug">
ul.fixTop
    li(v-for="item in subMenu")
        router-link(:to="item.routerTo" v-bind:class="{currentMenu: item.ll === menuName}") {{ item.li[la] }}
</template>

<script>

import {keyMetaData} from '@/meta-data'
import * as R from 'ramda'

export default {
    name: 'SubNav',
    data () {
        return {
            ulClass: 'fixTop'
        }
    },
    props: {
        parentName: String,
        menuName: String
    },
    computed: {
        subMenu () {
            return R.pathOr([], [this.parentName, 'subMenu'])(keyMetaData)
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

.fixMiddle
    position: fixed
    left: 82.2%
    top: 70px
    width: 15%

.fixTop
    position: absolute
    left: 0
    top: 0

.fixBottom
    position: absolute
    left: 0
    bottom: 0

ul
    width: 100%
    z-index: 0
    font-size: 14px
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
            width: 80%
            padding-left: 15%
            padding-right: 15%

.currentMenu
    background-color: base0
    width: 80%
    padding-left: 15%
    padding-right: 15%

</style>
