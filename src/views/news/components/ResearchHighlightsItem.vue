<template lang="pug">
section(:class="item.style")
    h3.title {{ item.title[la] }}
    img.pure-img(:src="imgPath")
    p.abstract(v-md="item.abstract")
    p
        | -- 
        span.authors {{ paper.authors | formatAuthors(1) }} et al.
        | ,  
        a.cite(:href="paper.href")
            span.journal {{ paper.journal | formatJournal }} 
            span.volume {{ paper.volume }}
            | , 
            span.pages {{ paper.pages }} 
            span.year ({{ paper.year }}).
        span.award {{ item.award }}
    .research-attached(v-md="item.attached")
</template>

<script>

export default {
    name: 'ResearchHighlightsItem',
    props: {
        item: Object,
    },
    computed: {
        paper () {
            return this.item.paper
        },
        imgPath () {
            return require('images/researchhighlights/' + this.item.paper.id + '.png')
        }
    }
}
</script>

<style lang="stylus">
@import '~static/basecolors.styl'

.research-attached a
    color: baseblue
</style>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

.title
    font-size: 15px
    font-weight: bold
    color: #0070c0

img
    max-width: 600px
    margin: 0 auto

.cite
    color: baseblue
    font-size: 13px
.cite:hover
    text-decoration: underline

.journal
    font-style: italic

.award
    font-weight: bold
    font-style: italic
    text-decoration: underline

</style>
