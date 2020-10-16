<template lang="pug">
section.news-item(:class="item.style" )
    p
        span.news-date {{ item | formatDate(la) }}, 
        span(v-md:news.nobreak.inline="item.content[la]")
    figure
        img.pure-img(:src="imgPath" :width="item.width")
        figcaption {{ item.figcaption[la] }}
</template>

<script>

import {formatDate} from 'plugin/filters'

export default {
    name: 'NewsItem',
    props: {
        item: Object,
    },
    computed: {
        modifiedContent () {
            return'<span class="news-date">' + formatDate(this.item, this.la) + '</span>, ' + this.item.content[this.la]
        },
        imgPath () {
            return require('images/news/' + this.item.imgPath)
        },
        imgWidth () {
            return this.imgWidth.toString() + 'px'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

figure
    margin: 2px
    text-align: center
    img
        margin: 0 auto
    figcaption
        font-size: 12px
        margin: 4px

</style>

<style lang="stylus">
@import '~static/basecolors.styl'

.news-item strong
    color: #ba8a31
    font-weight: normal

.news-date
    color: baseblue

.left-right
    > *
        display: inline-block
        vertical-align: middle
    > figure
        width: 40%
    > p
        width: 50%
</style>
