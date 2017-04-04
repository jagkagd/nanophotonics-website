<template lang="pug">
div#web-header
    div#logos
        div#webTitle {{ group[la] }}
        img#logo(src="~assets/images/home-logo.png" width="527" height="70")
        img#university(src="~assets/images/ZJU.png" width="171" height="60")
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

#university
    float: right
</style>

