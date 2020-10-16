<template lang="pug">
#promo
    router-link(to="/people")
        img(src="~images/index/group.jpg")
    p.promo-text(v-md.inline="intro[la]" v-bind:class="'promo-text-'+la")
    a.join-us
        span.join-us-en Join us 
        span.join-us-zh 招生介绍
</template>

<script>

export default {
    name: 'Promo',
    data () {
        return {
            intro: {
                en: '**Nanophotonics group** is in the College of Optical Science and Engineering, and the State Key Laboratory of Modern Optical Instrumentation at Zhejiang University. Our group explores the science, technology and art of light on the nanoscale. Our research interests include calculation, fabrication, manipulation, characterization and functionalization of low-dimensional photonic structures for both scientific research and technological applications.',
                zh: '**微纳光子学研究组** 隶属于浙江大学光电科学与工程学院及现代光学仪器国家重点实验室，致力于探索纳米尺度上光的科学、技术和艺术。研究兴趣包括低维光子结构及器件的理论设计、实验制备、微纳操纵、光电表征、功能化等前沿基础及应用技术。'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
#promo
    min-height: 380px

img
    max-width: 90%
    max-height: auto
    clear: both
    display: block
    margin: auto
</style>

<style lang="stylus">
@import '~static/basecolors.styl'

.promo-text
    text-align: justify
    margin: 0 5px
    line-height: 1.5em

.promo-text-zh
    margin: 20px 5px
    font-size: 14px
    line-height: 2em

.join-us
    display: inline-block
    width: 98%
    text-align: right
    color: baseblue
    font-style: italic
    font-size: 14px

.join-us-en
    color: baseblue

.join-us-zh
    color: #b81818
</style>
