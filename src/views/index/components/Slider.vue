<template lang="pug">
div#slider
    swiper(:options="swiperOption" ref="swiperInstant" v-on:trans="hhh")
        swiper-slide(v-for="(item, index) in items", v-bind:key="index")
            slider-item(:item="item")
        div.swiper-pagination(slot="pagination")
</template>

<script>
// @flow

import reserachHighlight from 'flow/typedef.js'
import SliderItem from './SliderItem'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import _ from 'lodash'

export default {
    name: 'Slider',
    data (): {items: Array<reserachHighlight>} {
        return {
            items: [],
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                onTransitionStart (swiper) {
                    // this.dispatchEvent('trans', swiper)
                    // this.items[swiper.activeIndex].animActive = true
                    // this.items[swiper.previousIndex].animActive = false
                }
            }
        }
    },
    mounted () {
        this.getData('slides?limit=6').then(res => {
            _.map(res.data, (o) => {
                o.animActive = false
            })
            this.items = res.data
        })
    },
    methods: {
        hhh (swiper) {
            console.log(swiper.activeIndex)
        }
    },
    components: {
        swiper,
        swiperSlide,
        SliderItem
    }
}
</script>

<style lang="stylus" scoped>
#slider
    height: 386px
</style>
