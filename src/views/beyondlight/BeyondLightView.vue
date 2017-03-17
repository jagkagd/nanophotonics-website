<template lang="pug">
div
    waterfall(:line-gap="200" v-bind:watch="items")
        waterfall-slot(v-for="(item, index) in items" key="item")
            img(:src="item.path")
</template>

<script>
// @flow

import axios from 'axios'
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
        axios.get('/api.php/beyondlight').then(res => {
            this.items = res.data
        })
    },
    components: {
        Waterfall,
        WaterfallSlot
    }
}
</script>

