<template lang="pug">
div
    h1.viewTitle Research interests  
    div.section.pure-g(v-for="(item, index) in items" key="index")
        img.pure-u-1-4(:src="item.imgpath")
        div.info.pure-u-3-4
            h2 {{ item.title[la] }}
            hr
            p(v-md="item.examples")
</template>

<script>
// @flow

export default {
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
                    imgpath: require('assets/images/research/research_1.png')
                },
                {
                    title: {
                        en: 'Nanophotonics',
                        zh: '纳米光子学'
                    },
                    examples: `Fiber Optics, Guide Wave Optics, Near Field Optics  
                                Plasmonics, Nonlinear Optics, Quantum Optics  
                                Optoelectronics, Optomechanics, Atom Optics`,
                    imgpath: require('assets/images/research/research_2.png')
                },
                {
                    title: {
                        en: 'Nanodevices',
                        zh: '微纳器件'
                    },
                    examples: `Couplers, Filters, Gratings  
                                Interferometers, Resonators, Detectors  
                                Modulators, Lasers, Sensors`,
                    imgpath: require('assets/images/research/research_3.png')
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>

.section
    img
        width: 150px
        height: 150px
        border-radius: 5px
    .info
        padding-left: 10px
        h2
            text-size: 13px
            margin: 10px 0px
        p
            text-size: 12px
            color: blue

</style>
