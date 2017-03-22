<template lang="pug">
div
    h2 {{ BooksTitle[la] }}
    ol
        li(v-for="(item, index) in itemsGroup['Book']" v-bind:value="booksLength-index")
            span.authors {{ item.authors2 }}, 
            span.title {{ item.title }}, 
            span.press {{ item.press }}, 
            span.year {{ item.year }}.
    h2 {{ ChaptersTitle[la] }}
    ol
        li(v-for="(item, index) in itemsGroup['Book chapter']" v-bind:value="chaptersLength-index")
            span.authors1 {{ item.authors1 }}, 
            span.chapter "{{ item.chapter}}", 
            span.title {{ item.title }}, 
            span.authors2 {{ item.authors2 }}{{ etal[item.lang] }}, 
            span.press {{ item.press }}, 
            span.year {{ item.year }}.
</template>

<script>
// @flow

import book from 'flow/typedef.js'
import _ from 'lodash'
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'BooksView',
    data (): {items: Array<book>, etal: Object}{
        return {
            items: [],
            etal: {
                zh: '编著',
                en:'ed.'
            },
            BooksTitle: {
                en: 'Books',
                zh: '著作'
            },
            ChaptersTitle: {
                en: 'Book Chapters',
                zh: '章节'
            }
        }
    },
    mounted () {
        this.getData('books').then(res => {
            this.items = res.data
        })
    },
    computed: {
        itemsGroup (): {[key: string]: Array<book>} {
            return _.groupBy(this.items, 'type')
        },
        booksLength () {
            return this.itemsGroup['Book'].length
        },
        chaptersLength () {
            return this.itemsGroup['Book chapter'].length
        }
    }
})
</script>

<style lang="stylus" scoped>
li
    margin: 8px 0

.title
    font-style: italic
</style>
