<template lang="pug">
header
    #logos
        img#logo(src="~images/home-logo.png")
        img#university(src="~images/ZJU.png")
    header-nav
</template>

<script>
// @flow

import HeaderNav from './HeaderNav.vue'

export default {
    name: 'WebHeader',
    data () {
        return {
            group: {
                en: 'Nanophotonics Group',
                zh: '微纳光子学研究组'
            }
        }
    },
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
    padding: 15px 30px
    box-shadow: 3px 3px 3px black
    border-radius: 15px
    clearfix()

#logo
    float: left
    width: 527px
    height: 70px

#university
    float: right
    width: 171px
    height: 60px
</style>

