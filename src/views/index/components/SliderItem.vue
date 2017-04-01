<template lang="pug">
div
    router-link(:to="'/news/research_highlights#rh-'+item.id" v-bind:style="{backgroundImage: 'url(' + imgPath + ')'}")
        // img(:src="imgPath")
        div.bottom
            p
                span.title {{ item.title[la] }}
            p
                | -- 
                span.authors {{ paper.authors | formatAuthors(1) }} et al.
                | , 
                span.journal {{ paper.journal | formatJournal }} 
                span.volume {{ paper.volume }}
                | , 
                span.pages {{ paper.pages }} 
                span.year ({{ paper.year}})
                | .
</template>

<script>
// @flow

export default {
    name: 'SliderItem',
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
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

a
    display: block
    height: 374px
    background-repeat: no-repeat
    background-size:cover
    background-position:50% 50%

.bottom
    position: absolute
    width: 100%
    bottom: 0px
    background-color: rgba(0, 0, 0, 0.5)
    padding: 10px 0
    color: base0

.title
    font-weight: bold
    font-size: 14px

</style>
