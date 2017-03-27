<template lang="pug">
div(:class="item.style")
    div(v-md="modifiedContent")
</template>

<script>
// @flow

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
            return'<span class="news-date">' + this.item.date + '</span>, ' + this.item.content
        }
    }
}
</script>

<style lang="stylus">

.news-date
    color: blue

.news-image-caption
    text-align: center
    img
        max-width: 600px
    p
        font-size: 12px
        color: blue

.news-imgs
    text-align: center
    > .news-image-caption
        display: inline-block

.news-images-right
    float: right
    padding: 0 10px

</style>

