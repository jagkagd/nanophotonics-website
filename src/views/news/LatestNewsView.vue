<template lang="pug">
div
    ul
        li(v-for="item in items" v-bind:id="'news-'+item.id")
            news-item(:item="item")
</template>

<script>
// @flow

import NewsItem from './components/NewsItem'
import news from 'flow/typedef.js'
import {SubView} from 'plugin/SubView'
import _ from 'lodash/fp'

require.context('assets/images/news/', true, /\.jpg/)

export default SubView.extend({
    name: 'NewsView',
    data (): {items: Array<news>} {
        return {
            items: []
        }
    },
    mounted () {
        this.getData('news').then(res => {
            this.items = _.flow(_.sortBy('date_start'), _.reverse)(res.data)
        })
    },
    components: {
        NewsItem
    }
})
</script>

<style lang="stylus" scoped>

ul
    list-style: none
    margin: 0
    padding: 0

</style>
