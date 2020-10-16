<template lang="pug">
div
    research-highlights-item(v-for="item in items" v-bind:id="'rh-'+item.id" v-bind:item="item" v-bind:key="item.id")
</template>

<script>

import ResearchHighlightsItem from './components/ResearchHighlightsItem.vue'
import {SubView} from 'plugin/SubView'
import * as R from 'ramda'

export default SubView.extend({
    name: 'NewsView',
    data () {
        return {
            items: []
        }
    },
    mounted () {
        this.items = R.reverse(R.sortBy(item => parseInt(R.path(['paper', 'id'], item)), this.getData('researchHighlights', {})));
    },
    components: {
        ResearchHighlightsItem
    }
})
</script>
