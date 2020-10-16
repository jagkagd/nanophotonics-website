<template lang="pug">
#latest-news
    h1 {{ latestNewsTitle[la] }}
    ul
        li(v-for="item in latestNewsList")
            latest-news-item(:item="item")
</template>

<script>

import LatestNewsItem from './LatestNewsItem'
import * as R from 'ramda'

export default {
    name: 'LatestNews',
    data () {
        return {
            latestNewsList: [],
            latestNewsTitle: {
                en: 'Latest News',
                zh: '组内新闻'
            }
        }
    },
    mounted () {
        this.latestNewsList = R.reverse(R.sortBy(R.prop('date_start'), this.getData('latestnews', {limit: 2})))
    },
    computed: {
        getImgPath (path) {
            return require('images/news/' + path)
        }
    },
    components: {
        LatestNewsItem,
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

#latest-news
    min-height: 380px

ul
    margin: 3px
    background-color: base1
    border: 1px solid base3
    box-shadow: 1px 1px base2
    border-radius: 5px
    height: 89%
    display: flex
    flex-direction: column
    justify-content: space-between
    li
        margin: 0 3px
        border-bottom: 1px solid base3
    li:last-child
        border-bottom: 0px
</style>
