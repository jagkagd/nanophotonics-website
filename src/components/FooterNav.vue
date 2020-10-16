<template lang="pug">
ul#footer-nav-list.pure-g
    li.pure-u-lg-1-8.pure-u-md-1-4.pure-u-1-2(v-for="menu in menuData")
        router-link(:to='menu.routerTo') {{ menu.li[la] }}
        ul
            li(v-for="sMenu in menu.children")
                router-link(:to='sMenu.routerTo') {{ sMenu.li[la] }}
    li.pure-u-lg-1-8.pure-u-md-1-4.pure-u-1-2(@click="$store.commit('switchLang')")
        a {{ lang[la] }}

</template>

<script>
import {menuData} from '@/meta-data'

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
    padding-bottom: 20px
    font-size: 14px
    > li
        margin: 0px
        padding: 0px
        text-align: center
        > a
            color: base4
        > ul
            margin-top: 5px
            > li
                white-space: nowrap
                margin: 4px 0
                font-size: 11px
                > a
                    color: base4
</style>
