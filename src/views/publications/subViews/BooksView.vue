<template lang="pug">
div
    h1.viewTitle Books
    ol
        li(v-for="item in itemListGroup['Book']")
            span.authors {{ item.authors2 }}, 
            span.title {{ item.title }}, 
            span.press {{ item.press }}, 
            span.year {{ item.year }}.
    h2 Book chapters
    ol
        li(v-for="item in itemListGroup['Book chapter']")
            span.authors1 {{ item.authors1 }}, 
            span.chapter "{{ item.chapter}}", 
            span.title {{ item.title }}, 
            span.authors2 {{ item.authors2 }}{{ i18n[item.lang]['ed'] }}, 
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
    data (): {itemList: Array<book>, i18n: Object}{
        return {
            itemList: [],
            i18n: {zh: {ed: '编著'}, en: {ed: 'ed.'}}
        }
    },
    mounted () {
        axios.get('/api.php/books').then(res => {
            this.itemList = res.data
        })
    },
    computed: {
        itemListGroup (): {[key: string]: Array<book>} {
            return _.groupBy(this.itemList, 'type')
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
