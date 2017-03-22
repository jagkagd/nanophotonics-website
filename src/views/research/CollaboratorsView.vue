<template lang="pug">
div
    ol
        li(v-for="item in items")
            a(:href="item.url")
                span.group {{ item.group }}, 
                span.university {{ item.university }}, 
                span.country {{ item.country }}.
</template>

<script>
// @flow
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'CollaboratorsView',
    data (): Object {
        return {
            items: Array
        }
    },
    mounted () {
        this.getData('collaborators').then(res => {
            this.items = res.data
        })
    }
})
</script>

<style lang="stylus" scoped>
li
    color: blue
    line-height: 2em
    a
        color: blue
</style>
