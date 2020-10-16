<template lang="pug">
#research-interests
    h1 {{ title[la] }}
    router-link.box(:to="{name: 'research_interests'}")
        div.item(v-for="(item, index) in direction")
            img.pure-img(:src="getImgPath(index+1)")
            div
                p.title {{ item.title[la] }}
                .detail(v-md.inline="item.detail")
</template>

<script>

export default {
    name: 'ResearchInterests',
    data () {
        return {
            title: {
                en: 'Research Interests',
                zh: '研究兴趣',
            },
            direction: [
                {
                    title: {
                        'en': 'Low-dimensional materials/structures',
                        'zh':'低维材料/结构',
                    },
                    detail: `Quantum dots, Nanoparticles, Atoms/Molecules
                    Micro/nanofibers, Nanowires, Nanotubes, Microchannels
                    Nano interfaces, 2-D materials, Micro/nano cavities,`
                },
                {
                    title: {
                        'en': 'Nanophotonics',
                        'zh': '纳米光子学',
                    },
                    detail: `Guide wave optics, Near field optics, Fiber optics
                    Nanoplasmonics, Nonlinear optics, Quantum optics
                    Optoelectronics, Optomechanics, Silicon photonics `,
                },
                {
                    title: {
                        'en': 'Nanodevices',
                        'zh': '微纳光子器件',
                    },
                    detail: `Passive nanophotonic components
                    Lasers, Light-emitting devices, Quantum light sources
                    Modulators, Detectors, Sensors`,
                },
            ]
        }
    },
    methods: {
        getImgPath (id) {
            return require('assets/images/index/research_' + id + '.png')
        }
    }
}
</script>

<style lang="stylus" scoped>

#research-interests
    height: 50%

    .box
        display: block
        margin-top: 3px

    .item
        display: flex
        flex-direction: row
        justify-content: space-between
        img
            width: 90px
            height: 90px
        div
            width: 88%
            .title
                font-weight: 600
                font-size: 14px
                color: #0099FF
                margin: 3px
                padding-bottom: 3px
                border-bottom: 1px gray solid
            .detail
                font-size: 9.5px
                color: #202020
                line-height: 1.7em
                margin: 3px
</style>
