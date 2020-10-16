<template lang="pug">
ol
    li(v-for="item in items")
        a(:href="item.url")
            span.group {{ item.group }},
            span.university {{ item.university }},
            span.country {{ item.country }}.
</template>

<script>
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'CollaboratorsView',
    data () {
        return {
            items: Array
        }
    },
    mounted () {
        this.items = this.getData('collaborators');
    }
})
</script>

<style lang="stylus" scoped>
ol
    list-style-position: outside
    li
        line-height: 3em
        a
            color: #0099ff
</style>
