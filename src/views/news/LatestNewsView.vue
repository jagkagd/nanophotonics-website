<template lang="pug">
div
    news-item(v-for="item in items" v-bind:id="'news-'+item.id" v-bind:item="item" v-bind:key="item.id")
</template>

<script>

import NewsItem from './components/NewsItem'
import {SubView} from 'plugin/SubView'
import * as R from 'ramda'

require.context('assets/images/news/', true, /\.jpg/)

export default SubView.extend({
    name: 'NewsView',
    data () {
        return {
            items: [],
        }
    },
    mounted () {
        this.items = R.reverse(R.sortBy(R.prop('date_start'), this.getData('news', {})));
    },
    components: {
        NewsItem,
    }
})
</script>
