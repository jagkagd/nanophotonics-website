<template lang="pug">
div
    router-view
    sub-nav(:menuName="'news'")
</template>

<script>
// @flow

import SubNav from 'components/SubNav.vue'
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'PeopleView',
    components: {
        SubNav
    }
})
</script>
