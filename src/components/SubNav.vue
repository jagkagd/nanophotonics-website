<template lang="pug">
ul(:class="ulClass")
    li(v-for="item in subMenu")
        router-link(:to="item.routerTo" v-bind:class="{currentMenu: item.ll === menuName}") {{ item.li[la] }}
</template>

<script>
// @flow

import {keyMetaData} from 'src/meta-data'
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
            return this.parentName ? (keyMetaData[this.parentName].subMenu || []) : []
        }
    },
    mounted () {
        window.addEventListener('scroll', this.changeUlClass)
    },
    destroyed () {
        window.removeEventListener('scroll', this.changeUlClass)
    },
    methods: {
        changeUlClass () {
            if(!_.isNil(this.$el)){
                const child = this.$el.getBoundingClientRect()
                const childHeight = this.$el.offsetHeight
                const parent = document.getElementById('sub-nav-container').getBoundingClientRect()
                const parentHeight = document.getElementById('sub-nav-container').offsetHeight
                if(parent.top >= 50){
                    this.ulClass = 'fixTop'
                }else if(childHeight + child.top > parentHeight + parent.top){
                    this.ulClass = 'fixBottom'
                }else if(child.top + parent.top > 50){
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
    left: 85%
    top: 70px
    width: 15%

.fixTop
    position: absolute
    left: 0
    top: 0

.fixBottom
    position: absolute
    left: 0
    bottom: 0

ul
    width: 100%
    z-index: 0
    font-size: 14px
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
            width: 80%
            padding-left: 15%
            padding-right: 15%

.currentMenu
    background-color: base0
    width: 80%
    padding-left: 15%
    padding-right: 15%

</style>
