<template lang="pug">
ul#header-list
    header-nav-li(v-for="menu in menuList" v-bind:menu="menu")
    li
        a 中文版
</template>

<script>
// @flow

import menuList from './menuList.json'
import HeaderNavLi from './HeaderNavLi.vue'

export default {
    name: 'HeaderNav',
    data () {
        return {
            menuList
        }
    },
    components: {
        HeaderNavLi
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
    background: linear-gradient(top, base2, base1, base2)
    border-radius: 5px

#header-list a:link, :active, :visited
    text-decoration: none

#header-list > li
    display: inline-block
    width: (100%/8)
    box-sizing: border-box
    border: 1px solid white
    height: 2.5em
    > a
        line-height: 2.5em

</style>
