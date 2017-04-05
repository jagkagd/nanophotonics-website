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
            this.items = this.sortByDate(res.data)
        })
    },
    computed: {
        yearRange (): Array<string> {
            return _.flow(_.map(o => o.year), _.uniq, _.sortBy(x => x))(this.items)
        },
        itemsGroupByYear (): {[year: string]: Array<journal>} {
            return _.groupBy('year')(this.items)
        },
        itemsSomeYear (): Array<journal> {
            switch(this.pubYear){
                case 'all':
                    return this.items
                case 'review':
                    return _.filter(o => _.includes('review')(_.lowerCase(o.type)))(this.items)
                default:
                    return this.itemsGroupByYear[this.pubYear]
            }
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
