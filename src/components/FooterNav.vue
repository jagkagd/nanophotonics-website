<template lang="pug">
ul#footer-nav-list.pure-g
    li.pure-u-1-8(v-for="menu in menuData")
        router-link(:to='menu.routerTo') {{ menu.li[la] }}
        ul
            li(v-for="sMenu in menu.children")
                router-link(:to='sMenu.routerTo') {{ sMenu.li[la] }}
    li.pure-u-1-8(@click="$store.commit('switchLang')")
        a {{ lang[la] }}

</template>

<script>
// @flow
import {menuData} from 'static/meta-data'

export default {
    name: 'FooterNav',
    data () {
        return {
            menuData,
            lang: {
                'en': '中文版',
                'zh': 'English'
            }
        }
    }
}
</script>

<style lang="stylus">
@import '~static/basecolors.styl'

#footer-nav-list
    width: 100%
    padding: 0
    padding-bottom: 20px
    margin: 0
    list-style: none
    font-size: 14px
    > li
        margin: 0px
        padding: 0px
        text-align: center
        > a
            text-align: center
            color: base4
        > ul
            list-style: none
            margin: 0px
            margin-top: 5px
            padding: 0px
            text-align: center
            > li
                white-space: nowrap
                margin: 4px 0
                font-size: 11px
                > a
                    color: base4

</style>
