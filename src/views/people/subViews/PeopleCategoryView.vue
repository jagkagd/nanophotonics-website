<template lang="pug">
div
    ul
        li(v-for="item in itemList")
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
    }
}
</script>

<style lang="stylus" scoped>
ul
    display: flex
</style>
