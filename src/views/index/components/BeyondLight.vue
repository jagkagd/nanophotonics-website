<template lang="pug">
div
    h1 Beyond Light
    router-link(to="/beyondlight" target="_blank")
        img(src="~assets/images/index/beyondlight.jpg")
</template>

<script>
// @flow

export default {
    name: 'BeyondLight'
}
</script>

<style lang="stylus" scoped>
img
    max-width: 100%
    max-height: auto
</style>
