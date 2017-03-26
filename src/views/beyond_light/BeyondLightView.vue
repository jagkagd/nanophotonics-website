<template lang="pug">
div
    ul
        li(v-for="(item, index) in items" key="index")
            h2 {{ item.title[la] }}
            waterfall(:line-gap="10")
                waterfall-slot(v-for="id in ids(item.number)" key="id" v-bind:width="320" v-bind:height="320")
                    img(:src="require('images/beyondlight/'+item.path+'/'+item.path+'-'+id+'.jpg')" width="320" height="320")
</template>

<script>
// @flow

import _ from 'lodash'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

export default {
    name: 'BeyondLight',
    data (): {items: Array<string>} {
        return {
            items: [
                {
                    path: 'news',
                    number: 6,
                    title: {
                        en: 'ddd',
                        zh: 'sss'
                    }
                }, {
                    path: 'll',
                    number: 5,
                    title: {
                        en: 'aaa',
                        zh: 'bbb'
                    }
                }
            ]
        }
    },
    methods: {
        ids (value) {
            console.log(_.range(1, value + 1))
            return _.range(1, value + 1)
        }
    },
    components: {
        Waterfall,
        WaterfallSlot
    }
}
</script>

<style lang="stylus" scoped>
ul
    list-style: none
    margin: 0
    padding: 0
</style>

