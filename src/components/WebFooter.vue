<template lang="pug">
#web-footer
    footer-nav
    #footerinfo
        img#footerlogo(src="~assets/images/foot-logo.png" height=55)
        #footerwords(v-md="info")
</template>

<script>
// @flow

import FooterNav from './FooterNav.vue'

export default {
    name: 'WebFooter',
    data () {
        return {
            info: `State Key Laboratory of Modern Optical Instrumentation, College of Optical Science and Engineering 
                    Zhejiang University, Hangzhou 310027, China
                    ©2013 Nanophotonics Research Group.`
        }
    },
    components: {
        FooterNav
    }
}
</script>

<style lang="stylus">
@import '~static/basecolors.styl'
@import 'nib/clearfix'

#web-footer
    border-top: 1px solid base4
    margin-top: 10px

#footerinfo
    margin: auto
    padding: 0 4%
    clearfix()

#footerlogo
    padding: 0
    border: 0
    float: left

#footerwords
    float: right
    text-align: center
    > p
        font-size: 13px
        margin: 0
        padding: 0

</style>

