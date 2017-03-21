<template lang="pug">
div
    div
        label(for='yearSelect') {{ yearLabel[la] }}: 
        select#yearSelect(v-model='pubYear')
            option(value='all') {{ allYearLabel[la] }}
            option(v-for='year in yearRange' v-bind:value='year') {{ year }}
    ol
        li(v-for='(item, index) in itemsSomeYear' v-bind:value="pubLength-index")
            span.authors {{ item.authors }}, 
            span.title "{{ item.title }}", 
            span.conference {{ item.conference }}, 
            span.pubinfo(v-if='item.pubinfo') {{ item.pubinfo }}, 
            span.date {{ item.date_start | formatDate }}, 
            span.location {{ item.location }}. 
            span.type(:class="item.type | formatClass") {{ item.type }} 
            span.award(:class="item.award | formatClass") {{ item.award }}
</template>

<script>
// @flow

import conference from 'flow/typedef.js'
import _ from 'lodash/fp'

export default {
    name: 'ConferencesView',
    data (): {items: Array<conference>, pubYear: string} {
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
            }
        }
    },
    mounted () {
        this.getData('conferences').then(res => {
            this.items = _.flow(_.sortBy('data_start'), _.reverse)(res.data)
        })
    },
    computed: {
        yearRange (): Array<string> {
            return _.flow(_.map(o => o.date_start.split('-')[0]), _.uniq, _.sortBy(x => x))(this.items)
        },
        itemsGroupByYear (): {[year: string]: Array<conference>} {
            return _.groupBy(o => o.date_start.split('-')[0])(this.items)
        },
        itemsSomeYear (): Array<conference> {
            return (this.pubYear === 'all') ? this.items : this.itemsGroupByYear[this.pubYear]
        },
        pubLength (): number {
            return this.itemsSomeYear.length
        }
    },
    filters: {
        formatDate (value) {
            return value.split('-')[0]
        }
    }
}

</script>

<style lang="stylus" scoped>
li
    margin: 8px 0

.type, .award
    font-style: italic

.oral
    display: none

.invited-talk
    color: blue

.poster
    color: cyan

.plenary-talk
    color: #4617B4

.best-student-paper
    color: #BA8A31

.best-paper-award
    color: #BA8A31

.best-poster-award
    color: #BA8A31

.tutorial-talk
    color: green

.keynote-speaker
    color: red
</style>
