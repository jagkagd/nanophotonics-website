<template lang="pug">
div.pure-g
    div.pure-u-13-24
        slider.comp
    div.pure-u-11-24
        promo.comp
    div.pure-u-2-3
        research-highlights.comp
    #down-right.pure-u-1-3
        latest-news.comp
        research-interests.comp
        beyond-light.comp
</template>

<script>
// @flow

import Promo from './components/Promo'
import Slider from './components/Slider'
import ResearchHighlights from './components/ResearchHighlights'
import LatestNews from './components/LatestNews'
import BeyondLight from './components/BeyondLight'
import ResearchInterests from './components/ResearchInterests'

export default {
    name: 'IndexView',
    components: {
        Promo,
        Slider,
        ResearchHighlights,
        LatestNews,
        BeyondLight,
        ResearchInterests
    }
}
</script>

<style lang="stylus">
@import '~static/basecolors.styl'

.comp
    padding: 3px
    margin: 5px
    border: 1px solid base3
    border-radius: 5px
    background-color: base0
    box-shadow: 1px 1px base2
    font-size: 13px
    h1
        margin: auto
        padding: 0px 8px
        background-color: base3
        box-shadow: 1px 1px base2
        border-radius: 5px
        color: base4
        font-family: "Myriad Pro"
        font-weight: bold
        text-align: center

</style>
