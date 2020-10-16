<template lang="pug">
div
    ul.pure-g
        li.pure-u-lg-1-2.pure-u-md-1-1(v-for="item in items")
            people-intro-item(:item="item")
</template>

<script>

import PeopleIntroItem from './components/PeopleIntroItem'
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'PeopleCategoryView',
    data () {
        return {
            items: [],
        }
    },
    mounted () {
        this.$store.commit('changeMenuName', this.category);
        this.items = this.getData('people', {category: this.category});
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
            this.items = this.getData('people', {category: this.category});
            this.$store.commit('changeMenuName', this.category);
        }
    }
})
</script>
