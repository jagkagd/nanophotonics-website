<template lang="pug">
ul#header-list.pure-g
    header-nav-li.pure-u-lg-1-8.pure-u-md-1-4.pure-u-1-2(v-for="(menu, index) in menuData" v-bind:key="index" v-bind:menu="menu")
    header-lang-li.pure-u-lg-1-8.pure-u-md-1-4.pure-u-1-2
</template>

<script>

import HeaderNavLi from './HeaderNavLi.vue'
import HeaderLangLi from './HeaderLangLi.vue'
import {menuData} from '@/meta-data'

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
    background-size: contain
    border: 1px solid base3
    border-radius: 5px

#header-list
    > li
        background-image: url(../assets/images/header-nav.png)
        height: 2.5em
    > li:not(:last-child)
        border-right: 1px solid base2
    > li > a
        font-size: 16px
        color: base4
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
