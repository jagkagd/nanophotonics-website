<template lang="pug">
#footer
    footer-nav
    #footerinfo
        img#footerlogo(src="~images/foot-logo.png" height=55)
        p#footerwords(v-md.inline="info")
</template>

<script>

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

#footer
    border-top: 1px solid base4
    padding: 5px
    margin-top: 10px

#footerinfo
    margin: auto
    padding: 0 4%
    display: flex
    justify-content: space-between

#footerlogo
    padding: 0
    border: 0

#footerwords
    text-align: center
    font-size: 13px
    margin: 0
    padding: 0

</style>
