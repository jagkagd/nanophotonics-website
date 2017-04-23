<template lang="pug">
figure.pure-u-1-1
    img.pure-img(src="~assets/images/people/current_group.jpg")
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
figure
    margin: 0
    padding: 0 10%

figcaption
    text-align: center

</style>
