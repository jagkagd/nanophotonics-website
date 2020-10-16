<template lang="pug">
div
    h2 Lasers  
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/L1.jpg")
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/L2.jpg")
    h2 Spectrometers  
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/s1.jpg")
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/s2.jpg")
    h2 Microscopes  
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/m1.jpg")
    h2 Micro/nanofiber drawing systems  
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/mn1.jpg")
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/mn2.jpg")
    h2 Micromanipulation & Characterization 
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/mc1.jpg")
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/mc2.jpg")
    img.pure-u-1-1.pure-u-md-1-2.pure-img(src="~images/research/mc3.jpg")
</template>

<script>
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'FacilitiesView'
})
</script>

<style lang="stylus" scoped>
img
    padding: 3%

h2
    color: #0099ff
    font-size: 14px
</style>
