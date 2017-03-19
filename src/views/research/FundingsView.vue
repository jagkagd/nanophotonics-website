<template lang="pug">
div
    h1.viewTitle Fundings
    ol
        li(v-for="item in items") {{ item }}
</template>

<script>
// @flow

module.exports = {
    data (): {items: Array<string>} {
        return {
            items: [
                'National Natural Science Foundation of China',
                'Ministry of Science and Technology, China',
                'Ministry of Education, China'
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
li
    padding: 10px 0
    color: blue
</style>
