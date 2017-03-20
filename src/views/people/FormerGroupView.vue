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
// @flow

import people from 'flow/typedef.js'

export default {
    name: 'FormerGroup',
    data (): {items: Array<people>} {
        return {
            items: []
        }
    },
    mounted () {
        this.getData('people?category=former_group_members').then(res => {
            this.items = res.data
        })
    }
}
</script>

<style lang="stylus" scoped>
.formerGroup
    border-collapse: collapse
    th, td
        border: 1px solid #0241d2
    thead
        background-color: rgb(2, 65, 210)
        color: white

.alt
    background-color: rgb(86, 156, 227)
</style>
    
