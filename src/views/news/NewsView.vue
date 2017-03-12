<template lang="pug">
div
    h1.viewTitle News and Highlights
    ul
        li(v-for="item in itemList" v-bind:id="'news-'+item.id")
            news-item(:item="item")
</template>

<script>
// @flow

import NewsItem from './components/NewsItem'
import news from '../../flow/typedef.js'
import axios from 'axios'

export default {
    name: 'NewsView',
    data (): {itemList: Array<news>} {
        return {
            itemList: []
        }
    },
    mounted () {
        axios.get('/api.php/news').then(res => {
            this.itemList = res.data
        })
    },
    components: {
        NewsItem
    }
}
</script>
