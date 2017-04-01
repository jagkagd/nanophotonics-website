<template lang="pug">
li(@mouseenter="openSubMenu" @mouseleave="closeSubMenu")
    router-link(:to='menu.routerTo') {{ menu.li[la] }}
    ul(v-if="menu.children" v-show="showSubMenu")
        li(v-for="sMenu in menu.children")
            router-link(:to='sMenu.routerTo') {{ sMenu.li[la] }}
</template>

<script>
export default {
    name: 'HeaderNavLi',
    data () {
        return {
            showSubMenu: false
        }
    },
    props: {
        menu: Object
    },
    methods: {
        closeSubMenu () {
            this.showSubMenu = false
        },
        openSubMenu () {
            this.showSubMenu = true
        }
    }
}

</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

li > ul
    position: absolute
    list-style: none
    width: 13em
    padding: 0
    margin: 0
    padding-top: 5px
    z-index: 200
    font-size: 13px
    > li
        background-color: base2
        border-bottom: 1px solid base1
        > a
            width: 100%
            height: 100%
            display: inline-table
            font-weight: normal
            line-height: 3em
        > a:hover
            background-color: base4
            color: white

</style>
