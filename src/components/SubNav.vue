<template lang="pug">
ul
    li(v-for="item in subItemList")
        router-link(:to="'/' + menuName + '/' + item.path") {{ item.text }}
</template>

<script>
// @flow

import menuList from './menuList.json'

export default {
    name: 'SubNav',
    data () {
        return {
            menuList
        }
    },
    props: {
        menuName: String
    },
    computed: {
        subItemList () {
            for(const item of this.menuList){
                if(item.path === ('/' + this.menuName)){
                    return item.children
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

ul
    position: fixed
    right: 5%
    top: 30%

    width: 20%

    padding: 0
    margin: 0
    list-style: none
    li
        border: 1px solid base0
        color: base4
        a
            width: 100%
            height: 100%
            padding: 5px
            display: table
        a:link, :visited
            text-decoration: none
            background-color: base3
        a:active, :hover
            text-decoration: none
            background-color: base0

</style>
