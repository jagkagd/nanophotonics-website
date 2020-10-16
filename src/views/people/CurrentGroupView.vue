<template lang="pug">
figure.pure-u-1-1
    img.pure-img(src="~assets/images/people/current_group.jpg")
    figcaption {{ caption[la] }}
</template>

<script>

import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'CurrentGroupView',
    data () {
        return {
            caption: {
                en: 'June, 2019 @ Yuquan Campus, Zhejiang University, Hangzhou.',
                zh: '2019年6月于杭州浙江大学玉泉校区'
    }
        }
    },
})
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

figure
    margin: 0
    padding: 0 10%

figcaption
    margin-top: 5px
    text-align: right
    color: baseblue

</style>
