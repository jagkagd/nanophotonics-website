<template lang="pug">
section
    h2.title {{ item.title[la] }}
    router-link.pic(:to="'/news/research_highlights#rh-'+item.id")
        img(:src="imgPath")
    div.content {{ item.abstract | formatContent(40, 2.2) }}
        |  
        router-link.read-more(:to="'/news/research_highlights#rh-'+item.id") Read more>>
    hr
    span.authors {{ paper.authors | formatAuthors(1) }} et al.
    | ,  
    a.cite(:href="paper.href")
        span.journal {{ paper.journal | formatJournal }} 
        span.volume {{ paper.volume }}
        | , 
        span.pages {{ paper.pages }} 
        span.year ({{ paper.year }}).
</template>

<script>
// @flow

import R from 'ramda'

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
            return require('images/researchhighlights/researchhighlight-' + this.item.imgpath)
        }
    },
    filters: {
        formatContent (value: string, emPerLine: number, scale: number): string {
            const maxLength = emPerLine * scale - 3
            const stringArray = value.split(' ')
            const accumulateLength: Array<number> = stringArray.reduce((res, c, i): number => {
                res[i + 1] = res[i] + c.length + 1
                return res
            }, [0])
            const wordsNumber: number = R.findIndex(R.gt(R.__, maxLength))(accumulateLength)
            return value.slice(0, accumulateLength[wordsNumber - 1] - 1) + '...'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

img
    width: 280px
    height: 184px

section
    margin: 5px
    padding: 5px
    background-color: base1
    box-shadow: 1px 1px base2
    border: 1px solid base3
    border-radius: 4px
    font-size: 13px
    .title
        height: 3em
        font-size: 13px
        font-weight: bold
        font-family: Arial
        padding-top: 0
    .read-more
        color: blue
    .read-more:hover
        text-decoration: underline
    .author
        color: #666666
    .cite
        color: blue
    .cite:hover
        text-decoration: underline
    .journal
        font-style: italic
    .pic > img
        border-radius: 4px
</style>

