<template lang="pug">
swiper#swiper(:options="swiperOption" ref="mySwiper")
    swiper-slide(v-for="(item, index) in items", v-bind:key="index")
        slider-item.slider-item(:item="item" v-bind:active="$store.state.activeSlide === index")
    .swiper-pagination(slot="pagination")
</template>

<script>
// @flow

import reserachHighlight from 'flow/typedef.js'
import SliderItem from './SliderItem'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
    name: 'Slider',
    data (): {items: Array<reserachHighlight>} {
        return {
            items: [],
            swiperOption: {
                autoplay: 3000,
                loop: true,
                effect: 'fade',
                setWrapperSize :true,
                autoHeight: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                onTransitionStart: swiper => {
                    this.$store.commit('changeActiveSlide', -1)
                },
                onTransitionEnd: swiper => {
                    this.$store.commit('changeActiveSlide', swiper.activeIndex - 1)
                }
            }
        }
    },
    mounted () {
        this.getData('slides?limit=6').then(res => {
            this.items = this.sortByDate(res.data)
        })
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
