<template lang="pug">
router-link.latest-news-item(:to="{name: 'latest_news'}")
    span.date {{ item | formatDate(la) }} 
    | - 
    | {{ item.content[la] }}
    br
    img.pure-img(v-if="showImg" :src="imgPath" :width="item.width")
</template>

<script>

import * as R from 'ramda'

export default {
    name: 'LatestNewsItem',
    props: {
        item: Object
    },
    computed: {
        imgPath () {
            return require('images/news/' + this.item.imgPath)
        },
        showImg () {
            return !R.isEmpty(this.item.imgPath)
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

.latest-news-item
    letter-spacing: normal
    margin: 5px
    line-height: 2em
    font-size: 13px
    .date
        color: baseblue
    img
        display: block
        max-width: 75%
        margin: 0 auto

</style>
