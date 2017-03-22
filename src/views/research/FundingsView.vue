<template lang="pug">
div
    ol
        li(v-for="item in items") {{ item }}
</template>

<script>
// @flow
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'FundingsView',
    data (): {items: Array<string>} {
        return {
            items: [
                'National Natural Science Foundation of China',
                'Ministry of Science and Technology, China',
                'Ministry of Education, China'
            ]
        }
    }
})
</script>

<style lang="stylus" scoped>
li
    padding: 10px 0
    color: blue
</style>
