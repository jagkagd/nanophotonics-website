<template lang="pug">
div(:class="item.style")
    div(v-md="modifiedContent")
</template>

<script>
// @flow

require.context('assets/images/news/', true, /\.jpg/)

export default {
    name: 'NewsItem',
    data () {
        return {
            showDetail: false
        }
    },
    props: {
        item: Object
    },
    computed: {
        modifiedContent (): string {
            return'<span class="date">' + this.item.date + '</span>, ' + this.item.content
        }
    }
}
</script>

<style lang="stylus" scoped>

.date
    display: inline

</style>

