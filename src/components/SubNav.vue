<template lang="pug">
ul
    li(v-for="item in subItemList")
        router-link(:to="'/' + menuName + '/' + item.path") {{ item.text[la] }}
</template>

<script>
// @flow

import _ from 'lodash/fp'

export default {
    name: 'SubNav',
    props: {
        menuList: Array,
        menuName: String
    },
    computed: {
        subItemList () {
            return _.find(o => o.label.en === this.menuName)(this.menuList)
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
            background-color: base3
        a:active, :hover
            background-color: base0

</style>
