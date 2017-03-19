<template lang="pug">
div
    h1.viewTitle {{ title }}
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
