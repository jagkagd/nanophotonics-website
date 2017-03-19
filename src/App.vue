<template lang="pug">
#app
    web-header(:menuList="menuData")
    h1.viewTitle(v-if="")
    router-view
    sub-nav
    web-footer(:menuList="menuData")
</template>

<script>
// @flow

import WebHeader from 'components/WebHeader'
import WebFooter from 'components/WebFooter'
import SubNav from 'components/SubNav'
import {menuData} from 'static/meta-data'

export default {
    name: 'app',
    data () {
        return {
            menuData
        }
    },
    components: {
        WebHeader,
        WebFooter
    }
}
</script>

<style lang="stylus">
@import '~static/pure-min.css'
@import '~static/grids-responsive-min.css'

#app
    background-image: url(./assets/images/bkg-page.jpg)
    > div
        width: 70%
        margin: auto

</style>
