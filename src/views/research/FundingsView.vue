<template lang="pug">
ol
    li(v-for="item in items[la]")
        div(v-if="(la==='en')")
            span {{ item }}
        div(v-if="(la==='zh')")
            span.type {{ item.type[la] }} 
            span.num ({{ item.number }})
            br
            span.name {{ item.name[la] }}
            br
            span.date {{ item.date }}, 
            span.authors {{ item.authors[la] }}
</template>

<script>

import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'FundingsView',
    data () {
        return {
            items: {
                'en': [
                    'National Natural Science Foundation of China',
                    'Ministry of Science and Technology, China',
                    'Ministry of Education, China'
                ],
            }
        }
    },
    mounted () {
        this.items.zh = this.getData('fundings');
    }
})
</script>

<style lang="stylus" scoped>
ol
    list-style-position: outside
    li
        line-height: 2em
        .name
            color: #0099ff
</style>
