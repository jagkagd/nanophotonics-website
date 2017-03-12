<template lang="pug">
div
    waterfall(:line-gap="200" :watch="items")
        waterfall-slot(v-for="(item, index) in items")
            img(:src="item.path")
</template>

<script>
// @flow
import axios from 'axios'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

export default {
    data (): {items: Array<string>} {
        return {
            item: []
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
    },
}
