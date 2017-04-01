<template lang="pug">
div
    h1 {{ title[la] }}
    ul.pure-g
        li.pure-u-1-2(v-for="item in items")
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
            this.items = this.sortByDate(res.data)
        })
    },
    components: {
        ResearchHighlightItem
    }
}
</script>

<style lang="stylus" scoped>
ul
    list-style: none
    padding: 0
    margin: 0
</style>
