<template lang="pug">
div
    table.formerGroup
        thead
            tr
                th Name
                th Former Position (Period)
                th Position After Our Group
        tbody
            tr(v-for="(item, index) in items" v-bind:class="(index % 2) ? '' : 'alt'")
                td.
                    {{ item.name[la] }}
                td {{ item.formerState[la] }}
                td {{ item.presentState[la] }}
</template>

<script>

import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'FormerGroup',
    data () {
        return {
            items: []
        }
    },
    mounted () {
        this.items = this.getData('people', {category: 'former_group_members'});
    }
})
</script>

<style lang="stylus" scoped>
.formerGroup
    border-collapse: collapse
    th, td
        border: 1px solid #0241d2
        padding: 2px
    thead
        background-color: #569CE3
        color: white
        font-size: 15.5px

.alt
    background-color: #CDD9E5
</style>
