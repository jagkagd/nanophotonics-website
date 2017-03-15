<template lang="pug">
ul#footer-nav-list
    li#footer-nav-item(v-for="menu in menuList")
        router-link(:to='menu.path') {{ menu.text[$store.state.lang] }}
        ul
            li(v-for="sMenu in menu.children")
                router-link(:to='menu.path+"/"+sMenu.path') {{ sMenu.text[$store.state.lang] }}
</template>

<script>
// @flow

import menuList from './menuList.json'

export default {
    name: 'WebNav',
    data () {
        return {
            menuList
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

#footer-nav-list
    width: 100%
    padding: 0
    padding-bottom: 20px
    margin: 0
    list-style: none
    display: flex
    align-items: flex-start
    #footer-nav-item
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
