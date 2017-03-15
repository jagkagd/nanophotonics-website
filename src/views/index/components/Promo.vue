<template lang="pug">
div
    router-link(to="/people")
        img(src="~assets/images/index/group.jpg")
    p(v-html="compiledIntro")
</template>

<script>
// @flow
import marked from 'marked'

export default {
    name: 'Promo',
    data () {
        return {
            intro: {
                en: '*Nanophotonics group* is in the College of Optical Science and Engineering, and the State Key Laboratory of Modern Optical Instrumentation at Zhejiang University. Our group explores the science, technology and art of light on the nanoscale. Our research interests include calculation, fabrication, manipulation, characterization and functionalization of low-dimensional photonic structures for both scientific research and technological applications. [Join us](welcome.pdf)',
                zh: '*微纳光子学研究组*\ 隶属于浙江大学光电科学与工程学院及现代光学仪器国家重点实验室，致力于探索纳米尺度上光的科学、技术和艺术。研究兴趣包括低维光子结构及器件的理论设计、实验制备、微纳操纵、光电表征、功能化等前沿基础及应用技术。[加入我们](welcome.pdf)'
            }
        }
    },
    computed: {
        compiledIntro () {
            return marked(this.intro[$store.state.lang])
        }
    }
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
