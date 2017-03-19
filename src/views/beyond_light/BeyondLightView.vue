<template lang="pug">
div
    h1.viewTitle {{ title }}
    waterfall(:line-gap="200" v-bind:watch="items")
        waterfall-slot(v-for="(item, index) in items" key="index")
            img(:src="item.path")
</template>

<script>
// @flow

import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

export default {
    name: 'BeyondLight',
    data (): {items: Array<string>} {
        return {
            items: []
        }
    },
    mounted () {
        this.getData('beyondlight').then(res => {
            this.items = res.data
        })
    },
    components: {
        Waterfall,
        WaterfallSlot
    }
}
</script>

