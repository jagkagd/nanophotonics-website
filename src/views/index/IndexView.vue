<template lang="pug">
.pure-g
    .pure-u-lg-14-24.pure-u-1
        latest-news.comp
    .pure-u-lg-10-24.pure-u-1
        promo.comp
    .pure-u-lg-14-24.pure-u-1
        research-highlights.comp
    .pure-u-lg-10-24.pure-u-1
        #bottom-right
            research-interests.comp
            beyond-light.comp
</template>

<script>

import LatestNews from './components/LatestNews'
import Promo from './components/Promo'
import ResearchHighlights from './components/ResearchHighlights'
import BeyondLight from './components/BeyondLight'
import ResearchInterests from './components/ResearchInterests'

export default {
    name: 'IndexView',
    components: {
        LatestNews,
        Promo,
        ResearchHighlights,
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
        font-size: 14px
        line-height: 2.5em
        height: 2.5em
        font-family: "Myriad Pro"
        font-weight: bold
        text-align: center

#bottom-right
    min-height: 720px
    display: flex
    flex-direction: column

</style>
