<template lang="pug">
div(:class="item.style")
    h3.title {{ item.title[la] }}
    img(:src="imgPath")
    p.abstract {{ item.abstract }}
    p
        | ——
        span.authors {{ paper.authors | formatAuthors(1) }} et al.
        | ,  
        a.cite(:href="paper.href")
            span.journal {{ paper.journal | formatJournal }} 
            span.volume {{ paper.volume }}
            | , 
            span.pages {{ paper.pages }} 
            span.year ({{ paper.year }}).
        span.award {{ item.award }}
    p(v-md="item.attached")
</template>

<script>
// @flow

// require.context('assets/images/researchhighlights/', true, /\.jpg/)

export default {
    name: 'ResearchHighlightsItem',
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
    }
}
</script>

<style lang="stylus" scoped>

.title
    font-size: 15px
    font-weight: bold
    color: blue

img
    margin: auto

.cite
    color: blue
    font-size: 13px
    :hover
        text-decoration: underline
.journal
    font-style: italic

.award
    font-weight: bold
    font-style: italic
    text-decoration: underline

</style>

