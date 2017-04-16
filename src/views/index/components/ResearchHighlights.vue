<template lang="pug">
div
    h1 {{ title[la] }}
    .pure-g
        .pure-u-1-2(v-for="item in items")
            research-highlight-item(:item="item")
</template>

<script>
// @flow

import researchHighlight from 'flow/typedef.js'
import ResearchHighlightItem from './ResearchHighlightItem'
import _ from 'lodash'

export default {
    name: 'ResearchHighlights',
    data (): {items: Array<researchHighlight>}{
        return {
            items: [],
            title: {
                en: 'Research Highlights',
                zh: '研究亮点'
            }
        }
    },
    mounted () {
        this.getData('researchHighlights?limit=6').then(res => {
            this.items = _.flow(_.sortBy(o => o.paper.date_start), _.reverse)(res.data)
        })
    },
    components: {
        ResearchHighlightItem
    }
}
</script>

