<template lang="pug">
ul#header-list
    header-nav-li(v-for="(menu, index) in menuData" v-bind:key="index" v-bind:menu="menu")
    header-lang-li
</template>

<script>
// @flow

import HeaderNavLi from './HeaderNavLi.vue'
import HeaderLangLi from './HeaderLangLi.vue'
import {menuData} from 'static/meta-data'

export default {
    name: 'HeaderNav',
    data () {
        return {
            menuData
        }
    },
    components: {
        HeaderNavLi,
        HeaderLangLi
    }
}
</script>

<style lang="stylus">
@import '~static/basecolors.styl'

#header-list
    width: 100%
    border: 2px #c6c6c6
    text-align: center
    background-image: url(../assets/images/header-nav.png)
    background-size: contain
    border: 1px solid base3
    border-radius: 5px
    font-size: 14px

#header-list
    > li
        display: inline-block
        width: (100%/8)
        height: 2.5em
    > li:not(:last-child)
        border-right: 1px solid base2
    > li > a
        width: 100%
        height: 100%
        display: inline-table
        line-height: 2.5em
        font-weight: bold
    > li > a:hover
        background-image: url(../assets/images/header-nav-hover.png)
        background-size: contain
        color: white

</style>
