<template lang="pug">
div#web-header
    div#logos
        img#logo(src="~assets/images/home-logo.png" alt="Nanophotonics Research Group - We expolre the science, technology and art of light on the nanoscale " width="527" height="70")
        img#university(src="~assets/images/ZJU.png" alt="Zhejiang University" width="171" height="60")
    header-nav
</template>

<script>
// @flow

import HeaderNav from './HeaderNav.vue'

export default {
    name: 'WebHeader',
    components: {
        HeaderNav
    }
}

</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'
@import 'nib/clearfix'

#logos
    background-color: base1
    margin-top: 0px
    margin-bottom: 10px
    border: 2px black
    padding: 15px
    padding-left: 30px
    padding-right: 30px
    box-shadow: 5px 5px 10px black
    border-radius: 15px
    clearfix()

#logo
    float: left

#university
    float: right
</style>

