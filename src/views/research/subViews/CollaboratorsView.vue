<template lang="pug">
div
    h1.viewTItle Collaborators
    ol
        li(v-for="item in itemList")
            a(:href="item.url")
                span.group {{ item.group }}, 
                span.university {{ item.university }}, 
                span.country {{ item.country }}.
</template>

<script>
// @flow

import axios from 'axios'

export default {
    name: 'CollaboratorsView',
    data (): Object {
        return {
            itemList: Array
        }
    },
    mounted () {
        axios.get('/api.php/collaborators').then(res => {
            this.itemList = res.data
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
