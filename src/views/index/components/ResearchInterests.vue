<template lang="pug">
div
    h1 {{ title[la] }}
    router-link(:to="{name: 'research_interests'}")
        img(:src="getImgPath(1, la)")
        img(:src="getImgPath(2, la)")
        img(:src="getImgPath(3, la)")
</template>

<script>
// @flow

export default {
    name: 'ResearchInterests',
    data () {
        return {
            title: {
                en: 'Research Interests',
                zh: '研究兴趣'
            }
        }
    },
    methods: {
        getImgPath (id, la) {
            return require('assets/images/index/research_' + id + '-' + la + '.jpg')
        }
    }
}
</script>

<style lang="stylus" scoped>
img
    max-width: 100%
    max-height: auto
</style>
