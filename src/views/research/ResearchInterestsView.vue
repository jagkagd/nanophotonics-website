<template lang="pug">
div
    .section.pure-g(v-for="(item, index) in content" v-bind:key="index")
        img.pure-u-1-4(:src="item.imgpath")
        .info.pure-u-3-4
            h2 {{ item.title[la] }}
            hr
            .examples(v-md="item.examples")
</template>

<script>

import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'ResearchInterestsView',
    data () {
        return {
            content: [
                {
                    title: {
                        en: 'Nanostructures',
                        zh: '纳米结构'
                    },
                    examples: `Quantum dots, Nanoparticles, Nanorods  
                                Micro/nanofibers, Nanowire, Nanoribbons/nanobelts  
                                Nanotubes/channels, Microrings/nanorings, Graphene`,
                    imgpath: require('images/research/research_1.png')
                },
                {
                    title: {
                        en: 'Nanophotonics',
                        zh: '纳米光子学'
                    },
                    examples: `Fiber Optics, Guide Wave Optics, Near Field Optics  
                                Plasmonics, Nonlinear Optics, Quantum Optics  
                                Optoelectronics, Optomechanics, Atom Optics`,
                    imgpath: require('images/research/research_2.png')
                },
                {
                    title: {
                        en: 'Nanodevices',
                        zh: '微纳器件'
                    },
                    examples: `Couplers, Filters, Gratings  
                                Interferometers, Resonators, Detectors  
                                Modulators, Lasers, Sensors`,
                    imgpath: require('images/research/research_3.png')
                }
            ]
        }
    }
})
</script>

<style lang="stylus" scoped>
.section
    img
        width: 150px
        height: 150px
        border-radius: 5px

.info
    padding-left: 20px
    h2
        font-size: 15px
        margin: 10px 0px
    .examples
        color: #0099ff
        line-height: 200%
</style>
