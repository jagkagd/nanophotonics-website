<template lang="pug">
div#web-footer
    footer-nav
    div#footerinfo
        img#footerlogo(src="~assets/images/foot-logo.png" height=55)
        div#footerwords
            p State Key Laboratory of Modern Optical Instrumentation, College of Optical Science and Engineering 
            p Zhejiang University, Hangzhou 310027, China
            p ©2013 Nanophotonics Research Group.
</template>

<script>
// @flow

import FooterNav from './FooterNav.vue'

export default {
    name: 'WebFooter',
    components: {
        FooterNav
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'
@import 'nib/clearfix'

#web-footer
    border-top: 1px solid base4

#footerinfo
    margin: auto
    padding: 0 3%
    clearfix()

#footerlogo
    padding: 0
    border: 0
    float: left

#footerwords
    float: right
    text-align: center
    font-size: 13px
    p
        margin: 0
        padding: 0

</style>

