<template lang="pug">
div
    h1.viewTitle Books
    ol
        li(v-for="item in itemsGroup['Book']")
            span.authors {{ item.authors2 }}, 
            span.title {{ item.title }}, 
            span.press {{ item.press }}, 
            span.year {{ item.year }}.
    h2 Book chapters
    ol
        li(v-for="item in itemsGroup['Book chapter']")
            span.authors1 {{ item.authors1 }}, 
            span.chapter "{{ item.chapter}}", 
            span.title {{ item.title }}, 
            span.authors2 {{ item.authors2 }}{{ etal[item.lang]['ed'] }}, 
            span.press {{ item.press }}, 
            span.year {{ item.year }}.
</template>

<script>
// @flow

import book from '../../../flow/typedef.js'
import axios from 'axios'
import _ from 'lodash'

export default {
    name: 'BooksView',
    data (): {items: Array<book>, etal: Object}{
        return {
            items: [],
            etal: {zh: {ed: '编著'}, en: {ed: 'ed.'}}
        }
    },
    mounted () {
        axios.get('/api.php/books').then(res => {
            this.items = res.data
        })
    },
    computed: {
        itemsGroup (): {[key: string]: Array<book>} {
            return _.groupBy(this.items, 'type')
        }
    }
}
</script>

<style lang="stylus" scoped>
li
    margin: 5px

.title
    font-style: italic
</style>
