<template lang="pug">
li.mainMenu(@mouseenter="openSubMenu" @mouseleave="closeSubMenu")
    router-link(:to='menu.path') {{ menu.text }}
    ul(v-if="menu.children" v-show="showSubMenu")
        li(v-for="sMenu in menu.children")
            router-link(:to='menu.path+"/"+sMenu.path') {{ sMenu.text }}
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

.mainMenu a
    width: 100%
    height: 100%
    display: inline-table
    line-height: 2.5em

.mainMenu > ul
    position: absolute
    list-style: none
    padding: 0
    margin: 0
    padding-top: 10px
    z-index: 200
    > li
        background-color: base1
        box-sizing: border-box
        border: 1px solid white
        padding: 10px

</style>
