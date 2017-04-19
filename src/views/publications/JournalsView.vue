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
// @flow

import journal from 'flow/typedef.js'
import _ from 'lodash/fp'
import {SubView} from 'plugin/SubView'
import R from 'ramda'

export default SubView.extend({
    name: 'JournalsView',
    data (): {items: Array<journal>, pubYear: string} {
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
        this.getData('journals').then(res => {
            this.items = this.sortBy(['date_start'])(res.data)
        })
    },
    computed: {
        yearRange (): Array<string> {
            return _.flow(_.map(o => o.year), _.uniq, _.sortBy(x => x))(this.items)
        },
        itemsSomeYear (): Array<journal> {
            return R.cond([
                [R.equals('all'), R.always(R.identity)],
                [R.equals('review'), R.always(R.filter(o => _.includes('review')(_.lowerCase(o.type))))],
                [R.T, year => _.groupBy('year')(R._)[year]]
            ])(this.pubYear)(this.items)
        },
        pubLength () :number {
            return this.itemsSomeYear.length
        }
    }
})
</script>

<style lang="stylus" scoped>
li
    margin: 8px 0

.title
    color: blue

.journal
    font-style: italic

.volume
    font-weight: bold

.type
    font-weight: bold
    font-style: italic
    text-decoration: underline
</style>
