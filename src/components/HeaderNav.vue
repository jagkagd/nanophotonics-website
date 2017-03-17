<template lang="pug">
ul#header-list
    header-nav-li(v-for="(menu, index) in menuList" v-bind:key="index" v-bind:menu="menu")
    header-lang-li
</template>

<script>
// @flow

import menuList from './menuList.json'
import HeaderNavLi from './HeaderNavLi.vue'
import HeaderLangLi from './HeaderLangLi.vue'

export default {
    name: 'HeaderNav',
    data () {
        return {
            menuList
        }
    },
    components: {
        HeaderNavLi,
        HeaderLangLi
    }
}
</script>

<style lang="stylus" scoped>

@import 'nib/gradients'
@import '~static/basecolors.styl'

#header-list
    width: 100%
    margin: 0px
    border: 2px #c6c6c6
    padding: 0px
    list-style: none
    text-align: center
    background: linear-gradient(top, base2, base3, base4)
    border: 1px solid base3
    border-radius: 5px

#header-list
    > li
        display: inline-block
        width: (100%/8)
        box-sizing: border-box
        height: 2.5em
    > li:not(:last-child)
        border-right: 1px solid base2

</style>
