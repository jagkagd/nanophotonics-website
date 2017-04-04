<template lang="pug">
ul#slider
    transition-group(
        name="fade"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    )
        slider-item.slider-item(
            v-for="(item, index) in items"
            v-bind:key="index"
            v-bind:item="item"
            v-show="index === currentIndex"
            v-bind:active="index === currentIndex"
            v-bind:style="{zIndex: index}"
        )
</template>

<script>
// @flow

import reserachHighlight from 'flow/typedef.js'
import SliderItem from './SliderItem'

export default {
    name: 'Slider',
    data (): {items: Array<reserachHighlight>} {
        return {
            items: [],
            currentIndex: -1,
            anim: null
        }
    },
    mounted () {
        this.getData('slides?limit=6').then(res => {
            this.items = this.sortByDate(res.data)
            this.anim = setInterval(this.nextIndex, 5000)
        })
    },
    destroyed () {
        clearInterval(this.anim)
    },
    components: {
        SliderItem
    },
    methods: {
        nextIndex () {
            this.currentIndex = (this.currentIndex + 1) % this.items.length
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/animate.min.css'

#slider
    position: relative
    font-size: 13px
    border: 0
    margin: 5px

.slider-item
    position: absolute
    top: 0
    left: 0
    width: 100%

</style>
