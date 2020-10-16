<template lang="pug">
section
    h2.title {{ item.title[la] }}
    router-link.pic(:to="'/news/research_highlights#rh-'+item.id")
        img.pure-img(:src="imgPath")
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

import * as R from 'ramda'

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
            return require('images/researchhighlights/' + this.item.paper.id + '-1.png')
        }
    },
    filters: {
        formatContent (value, emPerLine, scale) {
            const maxLength = emPerLine * scale - 3
            const stringArray = value.split(' ')
            const accumulateLength = stringArray.reduce((res, c, i) => {
                res[i + 1] = res[i] + c.length + 1
                return res
            }, [0])
            const wordsNumber = R.findIndex(R.gt(R.__, maxLength))(accumulateLength)
            return value.slice(0, accumulateLength[wordsNumber - 1] - 2) + '...'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

img
    text-align: center
    width: 230px
    height: 151px
    margin: 5px auto

section
    margin: 5px
    padding: 5px
    background-color: base1
    box-shadow: 1px 1px base2
    border: 1px solid base3
    border-radius: 4px
    font-size: 13px
    .title
        height: 2.5em
        font-size: 13px
        font-weight: bold
        font-family: Arial
        padding: 0
        margin: 0
        margin-bottom: 3px
    .content
        line-height: 1.5em
    .read-more
        color: baseblue
    .read-more:hover
        text-decoration: underline
    .authors
        color: #636363
    .cite
        color: baseblue
    .cite:hover
        text-decoration: underline
    .journal
        font-style: italic
    .pic
        margin: 0 auto
        img
            border-radius: 4px
</style>
