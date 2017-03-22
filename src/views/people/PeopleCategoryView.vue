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
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'PeopleCategoryView',
    data (): {items: Array<people>} {
        return {
            items: []
        }
    },
    mounted () {
        this.$store.commit('changeMenuName', this.menuName)
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
        },
        menuName () {
            return this.category
        }
    },
    watch: {
        '$route' (to, from) {
            this.getData('people?category=' + this.category).then(res => {
                this.items = res.data
            })
            this.$store.commit('changeMenuName', this.menuName)
        }
    }
})
</script>

<style lang="stylus" scoped>
ul
    padding: 0
    margin: 0
    list-style: none
</style>
