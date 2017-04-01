<template lang="pug">
swiper#swiper(:options="swiperOption" ref="swiperInstant" v-on:trans="hhh")
    swiper-slide(v-for="(item, index) in items", v-bind:key="index")
        slider-item.slider-item(:item="item")
    .swiper-pagination(slot="pagination")
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
                autoplay: 5000,
                loop: true,
                effect: 'fade',
                setWrapperSize :true,
                autoHeight: true,
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
            this.items = this.sortByDate(res.data)
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
#swiper
    padding: 0
    font-size: 13px
    border-radius: 5px
    border: 0
    margin: 5px

</style>
