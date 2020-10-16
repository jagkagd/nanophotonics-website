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
            span.date {{ item | formatDate(la) }}, 
            span.location {{ item.location }}. 
            span.type(v-if="item.type" :class="item.type | formatClass") {{ item.type }} 
            span.award(v-if="item.award" :class="item.award | formatClass") {{ item.award }}
</template>

<script>

import * as R from 'ramda'
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'ConferencesView',
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
            }
        }
    },
    mounted () {
        this.items = R.reverse(this.getData('conferences'));
    },
    computed: {
        yearRange () {
            return R.pipe(R.map(o => o.date_start.split('-')[0]), R.uniq, R.sortBy(R.identity))(this.items)
        },
        itemsSomeYear () {
            /* eslint-disable no-multi-spaces */
            return R.cond([
                [R.equals('all'), R.always(R.identity)],
                [R.T,             year => items => R.groupBy(o => o.date_start.split('-')[0])(items)[year]]
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

.type, .award
    font-style: italic

.oral
    display: none

.invited-talk
    color: #0070c9

.poster
    color: #00acbf

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
    color: #b81b24
</style>
