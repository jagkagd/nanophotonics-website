<template lang="pug">
li
    router-link(:to="'/news/research_highlights#rh-'+item.id" v-bind:style="{backgroundImage: 'url(' + imgPath + ')'}")
        transition(
            name="up-down"
            mode="out-in"
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
        )
            div.bottom(v-show="active")
                p.title {{ item.title[la] }}
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
        item: Object,
        active: Boolean
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
@import '~static/animate.min.css'

a
    position: relative
    display: block
    height: 380px
    width: 100%
    background-repeat: no-repeat
    background-size: cover
    background-position:50% 50%
    overflow: hidden
    border-radius: 5px

.bottom
    position: absolute
    width: 100%
    bottom: 0px
    background-color: rgba(0, 0, 0, 0.5)
    padding: 5px 10px
    color: base0
    > p
        margin: 3px 0

.title
    font-weight: bold
    font-size: 14px

</style>
