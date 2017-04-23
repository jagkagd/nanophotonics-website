<template lang="pug">
div
    ul.pure-g
        li.pure-u-lg-1-2.pure-u-md-1-1(v-for="item in items")
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
        this.$store.commit('changeMenuName', this.category)
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
            this.$store.commit('changeMenuName', this.category)
        }
    }
})
</script>

