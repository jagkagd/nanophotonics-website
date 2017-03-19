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

export default {
    name: 'PeopleCategoryView',
    data (): {items: Array<people>} {
        return {
            items: []
        }
    },
    mounted () {
        this.getData('people?category=' + this.category).then(res => {
            this.items = res.data
        })
    },
    components: {
        PeopleIntroItem
    },
    computed: {
        category () {
            return this.$route.params.people_category
        }
    },
    watch: {
        '$route' (to, from) {
             this.getData('people?category=' + this.category).then(res => {
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
