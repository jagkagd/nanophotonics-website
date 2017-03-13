<template lang="pug">
div
    h1.viewTitle Journal papers
    div
        label(for='yearSelect') Year: 
        select#yearSelect(v-model='pubYear')
            option(value='all') --all--
            option(v-for='year in yearRange' v-bind:value='year') {{ year }}
    ol
        li(v-for='(item, index) in itemsSomeYear' v-bind:value="pubLength-index")
            span.authors {{ item.authors | formatAuthors(-1) }} 
            br
            span.title
                a(:href='item.href') "{{ item.title }},"
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
import { formatJournal, formatAuthors } from 'utils/utils-filters.js'
import axios from 'axios'
import _ from 'lodash/fp'

export default {
    name: 'JournalsView',
    data (): {items: Array<journal>, pubYear: string} {
        return {
            items: [],
            pubYear: 'all'
        }
    },
    mounted () {
        axios.get('/api.php/journals').then(res => {
            this.items = res.data
        })
    },
    computed: {
        yearRange (): Array<string> {
            return _.flow(_.map((o): string => o.year), _.uniq, _.sortBy(x => x))(this.items)
        },
        itemsGroupByYear (): {[year: string]: Array<journal>} {
            return _.groupBy('year')(this.items)
        },
        itemsSomeYear (): Array<journal> {
            return (this.pubYear === 'all') ? this.items : this.itemsGroupByYear[this.pubYear]
        },
        pubLength () :number {
            return this.itemsSomeYear.length
        }
    },
    filters: {
        formatJournal,
        formatAuthors
    }
}

</script>

<style lang="stylus" scoped>
li
    margin: 5px 0

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
