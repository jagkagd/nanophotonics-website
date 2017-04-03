<template lang="pug">
#app
    web-header
    router-view#content
    web-footer
</template>

<script>
// @flow

import WebHeader from 'components/WebHeader'
import WebFooter from 'components/WebFooter'

export default {
    name: 'app',
    components: {
        WebHeader,
        WebFooter
    }
}
</script>

<style lang="stylus">
@import '~static/pure-min.css'
@import '~static/grids-responsive-min.css'

*
    box-sizing: border-box

#app
    background-image: url(./assets/images/bkg-page.jpg)
    > div
        width: 70%
        margin: auto

#content
    position: relative

a
    text-decoration: none
    color: black

</style>
