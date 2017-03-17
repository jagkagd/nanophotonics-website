<template lang="pug">
div
    h1 {{ title[la] }}
    router-link(to="/beyondlight" target="_blank")
        img(src="~assets/images/index/beyondlight.jpg")
</template>

<script>
// @flow

export default {
    name: 'BeyondLight',
    data () {
        return {
            title: {
                en: 'Beyond Light',
                zh: '科研之余'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
img
    max-width: 100%
    max-height: auto
</style>
