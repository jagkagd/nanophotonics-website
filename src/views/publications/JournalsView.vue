<template lang="pug">
div
    div
        label(for='yearSelect') {{ yearLabel[la] }}: 
        select#yearSelect(v-model='pubYear')
            option(value='all') {{ allYearLabel[la] }}
            option(value='review') {{ reviewLabel[la] }}
            option(v-for='year in yearRange' v-bind:value='year') {{ year }}
    ol
        li(v-for='(item, index) in itemsSomeYear' v-bind:value="pubLength-index")
            span.authors {{ item.authors | formatAuthors(-1) }}
            br
            a.title(:href='item.href') "{{ item.title }},"
            span.type {{ item.type }} 
            br
            span.journal {{ item.journal | formatJournal }} 
            span.volume {{ item.volume }} 
            | ,
            span.pages {{ item.pages }} 
            span.year ({{ item.year }})
            | .
</template>

<script>

import {SubView} from 'plugin/SubView'
import * as R from 'ramda'

export default SubView.extend({
    name: 'JournalsView',
    data () {
        return {
            items: [],
            pubYear: 'all',
            yearLabel: {
                en: 'Year',
                zh: '年份'
            },
            allYearLabel: {
                en: '--all--',
                zh: '全部年份'
            },
            reviewLabel: {
                en: '--Review--',
                zh: '综述'
            }
        }
    },
    mounted () {
        this.items = R.reverse(R.sortBy(item => parseInt(R.prop('id'), item), this.getData('journals', {})));
    },
    computed: {
        yearRange () {
            return R.pipe(R.map(R.prop('year')), R.uniq, R.sortBy(R.identity))(this.items)
        },
        itemsSomeYear () {
            /* eslint-disable no-multi-spaces */
            return R.cond([
                [R.equals('all'),    R.always(R.identity)],
                [R.equals('review'), R.always(R.filter(R.compose(R.contains('review'), R.toLower, R.propOr('', 'type'))))],
                [R.T,                year => items => R.groupBy(R.prop('year'))(items)[year]]
            ])(this.pubYear)(this.items)
            /* eslint-enable */
        },
        pubLength () {
            return this.itemsSomeYear.length
        }
    }
})
</script>

<style lang="stylus" scoped>
li
    margin: 8px 0

.title
    color: #0070c9

.journal
    font-style: italic

.volume
    font-weight: bold

.type
    font-weight: bold
    font-style: italic
    text-decoration: underline
</style>
