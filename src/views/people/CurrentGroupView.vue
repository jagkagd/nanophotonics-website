<template lang="pug">
figure
    img(src="~assets/images/people/current_group.jpg")
    figcaption June, 2015 @ Yuquan Campus, Zhejiang University, Hangzhou. 
</template>

<script>
// @flow
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'CurrentGroupView'
})
</script>

<style lang="stylus" scoped>
figcaption
    text-align: center

img
    width: 740px
    height: 405px
    display: block
    margin: auto
</style>
