<template lang="pug">
#research-highlights
    h1 {{ title[la] }}
    .pure-g
        .pure-u-lg-1-2.pure-u-1(v-for="item in items")
            research-highlight-item.item(:item="item")
</template>

<script>

import ResearchHighlightItem from './ResearchHighlightItem'
import * as R from 'ramda'

export default {
    name: 'ResearchHighlights',
    data () {
        return {
            items: [],
            title: {
                en: 'Research Highlights',
                zh: '研究亮点'
            }
        }
    },
    mounted () {
        this.items = R.compose(R.take(4), R.reverse, R.sortBy(item => parseInt(R.path(['paper', 'id'], item))))(this.getData('researchHighlights', {}));
    },
    components: {
        ResearchHighlightItem
    }
}
</script>

<style lang="stylus">
@import '~static/basecolors.styl'

</style>
