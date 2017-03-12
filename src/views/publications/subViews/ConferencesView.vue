<template lang="pug">
div
    h1.viewTitle Conferences
    div
        label(for='yearSelect') Year: 
        select#yearSelect(v-model='pubYear')
            option(value='all') --all--
            option(v-for='year in yearRange' v-bind:value='year') {{ year }}
    ol
        li(v-for='(item, index) in itemsSomeYear' v-bind:value="pubLength-index")
            span.authors {{ item.authors | formatAuthors }}, 
            span.title "{{ item.title }}", 
            span.conference {{ item.conference }}, 
            span.pubinfo(v-if='item.pubinfo') {{ item.pubinfo }}, 
            span.date {{ item.date_start | formatDate }}, 
            span.location {{ item.location }}. 
            span.type(:class="typeClass[item.type]") {{ item.type }} 
            span.award(:class="awardClass[item.award]") {{ item.award }}
</template>

<script>
// @flow

import conference from 'flow/typedef.js'
import axios from 'axios'
import _ from 'lodash/fp'

export default {
    name: 'ConferencesView',
    data (): {items: Array<conference>, pubYear: string} {
        return {
            items: [],
            pubYear: 'all',
            typeClass: {
                'Oral': 'oral',
                'Invited talk': 'invited-talk',
                'Poster': 'poster',
                'Plenary talk': 'plenary-talk',
                'Keynote Speaker': 'keynote-speaker',
                'Tutorial talk': 'tutorial-talk'
            },
            awardClass: {
                'Best paper award': 'best-paper-award',
                'Best poster award': 'best-poster-award',
                'Best student paper award': 'best-student-paper-award'
            }
        }
    },
    mounted () {
        axios.get('/api.php/conferences').then(res => {
            this.items = _.flow(_.sortBy('data_start'), _.reverse)(res.data)
        })
    },
    computed: {
        yearRange (): Array<string> {
            const res = _.flow(_.map((o: string): string => o.date_start.split('-')[0]), _.uniq, _.sortBy(x => x))(this.items)
            return res
        },
        itemsGroupByYear (): {[year: string]: Array<conference>} {
            return _.groupBy((o): string => o.date_start.split('-')[0])(this.items)
        },
        itemsSomeYear (): Array<conference> {
            return (this.pubYear === 'all') ? this.items : this.itemsGroupByYear[this.pubYear]
        },
        pubLength (): number {
            return this.itemsSomeYear.length
        }
    },
    filters: {
        formatDate (value: string): string {
            return value.split('-')[0]
        }
    }
}

</script>

<style lang="stylus" scoped>
li
    margin: 5px 0

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
