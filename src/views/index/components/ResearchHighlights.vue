<template lang="pug">
div
    h1 {{ title[la] }}
    .pure-g
        .pure-u-lg-1-2.pure-u-md-1-1(v-for="item in items")
            research-highlight-item(:item="item")
</template>

<script>
// @flow

import researchHighlight from 'flow/typedef.js'
import ResearchHighlightItem from './ResearchHighlightItem'

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
            this.items = this.sortBy(['paper', 'start_date'])(res.data)
        })
    },
    components: {
        ResearchHighlightItem
    }
}
</script>

