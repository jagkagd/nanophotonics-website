<template lang="pug">
div
    router-link(:to="'/news?id='+item.id")
        img(:src="imgPath" width="512" height="384" alt="")
        div.bottom
            p
                span.title {{ item.title }}
            p
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

img
    max-width: 100%
    max-height: auto

.title
    font-weight: bold

.bottom
    position: absolute
    bottom: 0px
    width: 100%
    background-color: rgba(0, 0, 0, 0.5)
    color: base0
</style>
