<template lang="pug">
div
    div.subNews(v-if="hasEvent")
        h1 {{ eventsTitle[eventState][la] }}
        ul
            li(v-for="item in events")
                router-link(:to="item.router") {{ item.date }} - {{ item.short_content }} 
    div.subNews
        h1 {{ latestNewsTitle[la] }}
        ul
            li(v-for="item in latestNewsList")
                router-link(:to="'/news#news-'+item.id") {{ item.date }} - {{ item.short_content }}
</template>

<script>
// @flow

import {event, news} from 'flow/typedef.js'
import moment from 'moment'

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
            this.events = res.data
        })
        this.getData('news?limit=3').then(res => {
            this.latestNewsList = res.data
        })
    },
    computed: {
        hasEvent (): boolean {
            return this.events.length > 0
        },
        showEvent (): boolean {
            return moment().subtract(moment(this.events[0].endDate)).days < 30
        },
        eventState (): string {
            const startDate = moment(this.events[0].startDate)
            const endDate = moment(this.events[0].endDate)
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
    padding: 0
    list-style: none
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
