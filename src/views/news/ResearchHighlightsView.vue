<template lang="pug">
div
    research-highlights-item(v-for="item in items" v-bind:id="'rh-'+item.id" v-bind:item="item")
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
            this.items = this.sortBy(['paper', 'date_start'])(res.data)
        })
    },
    components: {
        ResearchHighlightsItem
    }
})
</script>

