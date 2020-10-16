<template lang="pug">
#beyond-light
    h1 {{ title[la] }}
    router-link(:to="{name: 'beyond_light'}")
        img.pure-img(src="~images/index/beyondlight.jpg")
</template>

<script>

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

#beyond-light
    height: 317px

img
    width: 100%
    height: 90%
</style>
