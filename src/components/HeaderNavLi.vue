<template lang="pug">
li
    router-link(:to='menu.routerTo') {{ menu.li[la] }}
    ul.pure-u-lg-1-8.pure-u-md-1-4.pure-u-1-2(v-if="menu.children")
        li(v-for="sMenu in menu.children")
            router-link(:to='sMenu.routerTo') {{ sMenu.li[la] }}
</template>

<script>
export default {
    name: 'HeaderNavLi',
    props: {
        menu: Object
    }
}

</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

li > ul
    display: none

li:hover > ul
    display: block
    position: absolute
    padding-top: 5px
    z-index: 200
    font-size: 14px
    > li:not(last-child)
        border-bottom: 1px solid base1
    > li
        background-color: base2
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
