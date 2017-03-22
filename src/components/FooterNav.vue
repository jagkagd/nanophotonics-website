<template lang="pug">
ul#footer-nav-list
    li(v-for="menu in menuData")
        router-link(:to='menu.routerTo') {{ menu.li[la] }}
        ul
            li(v-for="sMenu in menu.children")
                router-link(:to='sMenu.routerTo') {{ sMenu.li[la] }}
</template>

<script>
// @flow
import {menuData} from 'static/meta-data'

export default {
    name: 'FooterNav',
    data () {
        return {
            menuData
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
    display: flex
    align-items: flex-start
    font-size: 14px
    > li
        width: (100%/7)
        display: block
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
            text-align: left
            > li
                white-space: nowrap
                font-size: 12px
                > a
                    color: base4

</style>
