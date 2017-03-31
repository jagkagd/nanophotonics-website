<template lang="pug">
#promo
    router-link(to="/people")
        img.promo-img(src="~assets/images/index/group.jpg")
    .promo-text(v-md="intro[la]" v-bind:class="'promo-text-'+la")
</template>

<script>
// @flow

export default {
    name: 'Promo',
    data () {
        return {
            intro: {
                en: '**Nanophotonics group** is in the College of Optical Science and Engineering, and the State Key Laboratory of Modern Optical Instrumentation at Zhejiang University. Our group explores the science, technology and art of light on the nanoscale. Our research interests include calculation, fabrication, manipulation, characterization and functionalization of low-dimensional photonic structures for both scientific research and technological applications. [Join us](welcome.pdf)',
                zh: '**微纳光子学研究组** 隶属于浙江大学光电科学与工程学院及现代光学仪器国家重点实验室，致力于探索纳米尺度上光的科学、技术和艺术。研究兴趣包括低维光子结构及器件的理论设计、实验制备、微纳操纵、光电表征、功能化等前沿基础及应用技术。[加入我们](welcome.pdf)'
            }
        }
    }
}
</script>

<style lang="stylus">
#promo
    height: 386px

.promo-img
    max-width: 90%
    max-height: auto
    clear: both
    display: block
    margin: auto

.promo-text
    p
        text-align: justify
        margin: 0 3px
    a
        text-decoration: none
        color: blue
        font-style: italic

.promo-text-zh > p
    font-size: 14px
    line-height: 2em
    margin: 20px 0
</style>
