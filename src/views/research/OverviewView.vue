<template lang="pug">
div
    p.
        Low-dimensional nanostructures are fascinating platforms for manipulating electrons, photons, plasmons, phonons, and atoms for both scientific research and technological applications.
        For low-dimensional photonics, the one-dimensional micro/nanofiber or nanowire is of particular great importance owing to its ability to route tightly confined light fields in single-mode with lowest space and material requirements, minimized optical path, and high mechanical flexibilities.
    p Since 2003, our group has been working on nanophotonics combining photonics and nanotechnology, as shown below
    img.pure-u-1-1.pure-img(src="~images/research/overview.jpg")
</template>

<script>
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'OverviewView'
})
</script>

<style lang="stylus" scoped>
img
    padding: 0 5%
    height: auto

p
    line-height: 1.5em
    font-size: 14px
</style>
