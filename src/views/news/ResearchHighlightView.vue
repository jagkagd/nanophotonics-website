<template lang="pug">
div
    router-view
    sub-nav(:menuName="'news'")
</template>

<script>
// @flow

import SubNav from 'components/SubNav.vue'

export default {
    name: 'PeopleView',
    components: {
        SubNav
    }
}
</script>
