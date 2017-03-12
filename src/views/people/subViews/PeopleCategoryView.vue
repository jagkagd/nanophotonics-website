<template lang="pug">
div
    ul.pure-g
        li.pure-u-1-2(v-for="item in itemList")
            people-intro-item(:item="item")
</template>

<script>
// @flow

import PeopleIntroItem from './components/PeopleIntroItem'
import people from 'flow/typedef.js'
import axios from 'axios'

export default {
    name: 'PeopleCategoryView',
    data (): {itemList: Array<people>} {
        return {
            itemList: []
        }
    },
    mounted () {
        axios.get('/api.php/people?category=' + this.$route.params.category).then(res => {
            this.itemList = res.data
        })
    },
    components: {
        PeopleIntroItem
    },
    watch: {
        '$route' (to, from) {
             axios.get('/api.php/people?category=' + this.$route.params.category).then(res => {
                this.itemList = res.data
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
