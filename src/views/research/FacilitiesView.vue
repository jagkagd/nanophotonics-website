<template lang="pug">
div
    h2 Lasers  
    img(src="~images/research/L1.jpg")
    img(src="~images/research/L2.jpg")
    h2 Spectrometers  
    img(src="~images/research/s1.jpg")
    img(src="~images/research/s2.jpg")
    h2 Microscopes  
    img(src="~images/research/M1.jpg")
    h2 Micro/nanofiber drawing systems  
    img(src="~images/research/mn1.jpg")
    img(src="~images/research/mn2.jpg")
    h2 Micromanipulation & Characterization 
    img(src="~images/research/mc1.jpg")
    img(src="~images/research/mc2.jpg")
    img(src="~images/research/mc3.jpg")
</template>

<script>
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'FacilitiesView'
})
</script>

<style lang="stylus" scoped>
img
    margin: 10px
    width: 320px
    height: 213px

h2
    color: blue
    font-size: 14px
</style>
