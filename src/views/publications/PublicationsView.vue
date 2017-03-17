<template lang="pug">
div
    router-view
    sub-nav(:menuName="'publications'")
</template>

<script>
// @flow

import SubNav from 'components/SubNav.vue'

export default {
    name: 'PublicationsView',
    components: {
        SubNav
    }
}
</script>
