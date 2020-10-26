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
                td {{ item.name[la] }}
                td {{ item | formerState(la) }}
                td {{ item | presentState(la) }}
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
        this.items = this.getData('people', {category: 'former'});
    },
    filters: {
        formerState (item, la) {
            if(item.formerState[la] !== "") return item.formerState[la];
            let s = {
                "former": {
                    "zh": "",
                    "en": "",
                },
                "post doctor": {
                    "zh": "博士后",
                    "en": "Postdoc",
                },
                "PhD": {
                    "zh": "博士生",
                    "en": "PhD student",
                },
                "master": {
                    "zh": "硕士生",
                    "en": "Master student",
                },
                "undergraduate": {
                    "zh": "本科生",
                    "en": "Undergrad student",
                },
                "visitor": {
                    "zh": "访问学生",
                    "en": "Visitor",
                },
            }[item.degree][la];
            s += " (" + item.year_start + (item.year_start === item.year_end ? "" : ("-" + item.year_end)) + ")"
            return s;
        },
        presentState (item, la) {
            let s = item.presentState[la].split("+");
            if(s.length === 1) return s[0];
            return s[0] + {"zh": "，", "en": ", "}[la] + s[1];
        }
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
