<template lang="pug">
div
    ul.pure-g
        li.pure-u-1-2(v-for="item in items")
            people-intro-item(:item="item")
</template>

<script>
// @flow

import PeopleIntroItem from './components/PeopleIntroItem'
import people from 'flow/typedef.js'
import axios from 'axios'

export default {
    name: 'PeopleCategoryView',
    data (): {items: Array<people>} {
        return {
            items: []
        }
    },
    mounted () {
        axios.get('/api.php/people?category=' + this.$route.params.category).then(res => {
            this.items = res.data
        })
    },
    components: {
        PeopleIntroItem
    },
    watch: {
        '$route' (to, from) {
             axios.get('/api.php/people?category=' + this.$route.params.category).then(res => {
                this.items = res.data
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
ul
    padding: 0
    margin: 0
    list-style: none
</style>
