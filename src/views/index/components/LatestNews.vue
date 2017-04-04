<template lang="pug">
div
    .subNews(v-if="showEvent")
        h1 {{ eventsTitle[eventState][la] }}
        ul
            li(v-for="item in events")
                router-link(:to="item.router") {{ item | formatDate }} - {{ item.short_content }} 
    .subNews
        h1 {{ latestNewsTitle[la] }}
        ul
            li(v-for="item in latestNewsList")
                router-link(:to="{name: 'latest_news'} + '#news-'+item.id") {{ item | formatDate }} - {{ item.short_content }}
</template>

<script>
// @flow

import {event, news} from 'flow/typedef.js'
import moment from 'moment'
import _ from 'lodash/fp'

export default {
    name: 'LatestNews',
    data (): {events: Array<event>, latestNewsList: Array<news>} {
        return {
            events: [],
            latestNewsList: [],
            eventsTitle: {
                'Upcoming': {
                    en: 'Upcoming Events',
                    zh: ''
                },
                'Ongoing': {
                    en: 'Ongoing Events',
                    zh: ''
                },
                'Previous': {
                    en: 'Previous Events',
                    zh: ''
                }
            },
            latestNewsTitle: {
                en: 'Latest News',
                zh: '近期新闻'
            }
        }
    },
    mounted () {
        this.getData('events?limit=1').then(res => {
            this.events = this.sortByDate(res.data)
        })
        this.getData('news?limit=3').then(res => {
            this.latestNewsList = this.sortByDate(res.data)
        })
    },
    computed: {
        showEvent (): boolean {
            if(_.isEmpty(this.events)){
                return false
            }
            const endDate = moment(this.events[0].date_end)
            const today = moment()
            if(today.diff(endDate, 'days') > 30){
                return false
            }
            return true
        },
        eventState (): string {
            const startDate = moment(this.events[0].date_start)
            const endDate = moment(this.events[0].date_end)
            const today = moment()
            if(today.isBefore(startDate)){
                return 'Upcoming'
            }else if(today.isAfter(endDate)){
                return 'Previous'
            }else{
                return 'Ongoing'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

ul
    margin: 3px
    background-color: base1
    border: 1px solid base3
    box-shadow: 1px 1px base2
    border-radius: 5px
    li
        margin: 0 3px
        border-bottom: 1px solid base3
    li:last-child
        border-bottom: 0px

</style>
