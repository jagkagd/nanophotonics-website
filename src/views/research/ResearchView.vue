<template lang="pug">
div
    router-view
    sub-nav(:menuName="'research'")
</template>

<script>
// @flow

import SubNav from 'components/SubNav.vue'

export default {
    name: 'ResearchView',
    components: {
        SubNav
    }
}
</script>
