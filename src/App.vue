<template lang="pug">
#app
    web-header(:menuList="menus")
    router-view
    web-footer(:menuList="menus")
</template>

<script>
// @flow

import WebHeader from './components/WebHeader'
import WebFooter from './components/WebFooter'
import menus from 'static/meta-data'

export default {
    name: 'app',
    data () {
        return {
            menus
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
