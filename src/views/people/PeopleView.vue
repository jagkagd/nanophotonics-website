<template lang="pug">
div
    h1.viewTitle {{ title }}
    router-view
    sub-nav(:menuName="'people'")
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
