<template lang="pug">
div
    ul
        li(v-for="item in items" v-bind:id="'rh-'+item.id")
            research-highlights-item(:item="item")
</template>

<script>
// @flow

import ResearchHighlightsItem from './components/ResearchHighlightsItem.vue'
import {SubView} from 'plugin/SubView'
import _ from 'lodash'

export default SubView.extend({
    name: 'NewsView',
    data () {
        return {
            items: []
        }
    },
    mounted () {
        this.getData('researchHighlights').then(res => {
            this.items = _.flow(_.sortBy(o => o.paper.date_start), _.reverse)(res.data)
        })
    },
    components: {
        ResearchHighlightsItem
    }
})
</script>

<style lang="stylus" scoped>
</style>
