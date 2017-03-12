<template lang="pug">
div
    router-link(to="/people")
        img(src="~assets/images/index/group.jpg")
    p
        strong Nanophotonics group 
        | is in the College of Optical Science and Engineering, and the State Key Laboratory of Modern Optical Instrumentation at Zhejiang University.
        | Our group explores the science, technology and art of light on the nanoscale.
        | Our research interests include calculation, fabrication, manipulation, characterization and functionalization of low-dimensional photonic structures for both scientific research and technological applications.
        a(href="welcome.pdf" target="_blank"): em Join us
        |  
        a(href="welcome.pdf" target="_blank"): em 招生介绍
</template>

<script>
// @flow

export default {
    name: 'Promo'
}
</script>

<style lang="stylus" scoped>
div
    height: 386px
    font-size: 13px
img
    max-width: 90%
    max-height: auto
    clear: both
    display: block
    margin: auto
</style>
