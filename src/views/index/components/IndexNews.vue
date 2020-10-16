<template lang="pug">
div
    h1 {{ IndexNewsTitle[la] }}
    ul
        li(v-for="item in IndexNewsList")
            router-link(:to="{name: 'latest_news'}") {{ item | formatDate(la) }} - {{ item.index_content }}
</template>

<script>

import moment from 'moment'
import R from 'ramda'

export default {
    name: 'IndexNews',
    data ()  {
        return {
            IndexNewsList: [],
            IndexNewsTitle: {
                en: 'Latest News',
                zh: '组内新闻'
            }
        }
    },
    mounted () {
        this.getData('index-news?limit=2').then(res => {
            this.latestNewsList = this.sortBy(['date_start'])(res.data)
        })
    },
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

ul
    margin: 3px
    background-color: base1
    border: 1px solid base3
    box-shadow: 1px 1px base2
    border-radius: 5px
    li
        margin: 0 3px
        border-bottom: 1px solid base3
    li:last-child
        border-bottom: 0px
</style>
