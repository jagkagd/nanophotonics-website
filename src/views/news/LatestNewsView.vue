<template lang="pug">
div
    news-item(v-for="item in items" v-bind:id="'news-'+item.id" v-bind:item="item")
</template>

<script>
// @flow

import NewsItem from './components/NewsItem'
import news from 'flow/typedef.js'
import {SubView} from 'plugin/SubView'

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
            this.items = this.sortByDate(res.data)
        })
    },
    components: {
        NewsItem
    }
})
</script>

