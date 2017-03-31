<template lang="pug">
ul(@scroll="changeUlClass" v-bind:class="")
    li(v-for="item in subMenu")
        router-link(:to="item.routerTo" v-bind:class="{currentMenu: item.k.name === menuName}") {{ item.li[la] }}
</template>

<script>
// @flow

import {keyMenuData} from 'static/meta-data'
import _ from 'lodash'

export default {
    name: 'SubNav',
    data () {
        return {
            ulClass: 'fixTop'
        }
    },
    props: {
        parentName: String,
        menuName: String
    },
    computed: {
        subMenu () {
            return this.parentName ? (keyMenuData[this.parentName].subMenu || []) : []
        }
    },
    methods: {
        changeUlClass (event) {
            const topSpace = 400
            const bottomSpace = 400
            if(!_.isNil(this.$el)){
                console.log('ulClass')
                const rect = this.$el.getBoundingClientRect()
                if(rect.top < topSpace){
                    this.ulClass = 'fixTop'
                }else if(rect.bottom < bottomSpace){
                    this.ulClass = 'fixBottom'
                }else{
                    this.ulClass = 'fixMiddle'
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

.fixMiddle
    position: fixed
    right: 0
    top: 100px

.fixTop
    position: absolute
    left: 80%
    top: 200px

.fixBottom
    position: absolute
    left: 80%
    bottom: 100px

ul
    position: relative
    z-index: 0
    height: 400px
    padding: 0
    margin: 20px 0
    font-size: 14px
    list-style: none
    li
        border: 1px solid base0
        color: base4
        text-align: center
        margin: 2px 0
        a
            line-height: 2em
            padding: 5px
            display: table
            border-radius: 3px
            width: 60%
            box-shadow: 2px 2px 4px #888
            background-color: base3
            transition: all .5s
        a:hover
            background-color: base0
            padding-left: 23%

.currentMenu
    background-color: base0
    padding-left: 30%

</style>
