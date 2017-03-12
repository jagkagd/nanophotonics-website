<template lang="pug">
div
    h1 Research Interests
    router-link(:to="{name: 'interests'}")
        img(src="~assets/images/index/research_1.jpg")
        img(src="~assets/images/index/research_2.jpg")
        img(src="~assets/images/index/research_3.jpg")
</template>

<script>
// @flow

export default {
    name: 'ResearchInterests'
}
</script>

<style lang="stylus" scoped>
img
    max-width: 100%
    max-height: auto
</style>
