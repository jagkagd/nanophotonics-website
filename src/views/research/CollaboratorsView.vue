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

export default {
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
}
</script>

<style lang="stylus" scoped>
a:active, :visited
    text-decoration: none

li
    color: blue
    padding: 5px 0
</style>
