<template lang="pug">
div.item
    h2.title {{ item.title }}
    div.pic
        router-link(:to="'/news#rh-'+item.id")
            img(:src="imgPath" width="280" height="184")
    div.content {{ item.abstract | formatContent(40) }}
        |  
        span
            router-link(:to="'/news#rh-'+item.id") Read more>>
    hr
    span.authors {{ paper.authors | formatAuthors(1) }} et al.
    | ,  
    a(:href="paper.href")
        span.journal {{ paper.journal | formatJournal }} 
        span.volume {{ paper.volume }}
        | , 
        span.pages {{ paper.pages }} 
        span.year ({{ paper.year }}).
</template>

<script>
// @flow

import _ from 'lodash'
import { formatAuthors, formatJournal } from 'utils/utils-filters.js'

export default {
    name: 'ResearchHighlightItem',
    props: {
        item: Object
    },
    computed: {
        paper () {
            return this.item.paper
        },
        imgPath () {
            return require('assets/images/researchhighlights/researchhighlight-' + this.item.imgpath)
        }
    },
    filters: {
        formatContent (value: string, emPerLine: number): string {
            const maxLength: number = emPerLine * 2.2 - 3
            const stringArray: Array<string> = value.split(' ')
            const accumulateLength: Array<number> = stringArray.reduce((res: Array<number>, c: string, i: number): number => {
                res[i + 1] = res[i] + c.length + 1
                return res
            }, [0])
            const wordsNumber: number = _.findIndex(accumulateLength, (o: number): boolean => o > maxLength)
            return value.slice(0, accumulateLength[wordsNumber - 1] - 1) + '...'
        },
        formatAuthors,
        formatJournal
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

.item
    margin: 5px
    padding: 5px
    border: 1px solid base4
    border-radius: 3px
.title
    font-size: 13px
    height: 2.5em
.jounal, .volume, .pages, .year
    color: blue
    font-style: italic
</style>

