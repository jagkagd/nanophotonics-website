<template lang="pug">
div(:class="item.style" v-md.nobreak.images="modifiedContent")
</template>

<script>
// @flow

import {formatDate} from 'plugin/filters'

export default {
    name: 'NewsItem',
    props: {
        item: Object
    },
    computed: {
        modifiedContent (): string {
            return'<span class="news-date">' + formatDate(this.item) + '</span>, ' + this.item.content
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
        margin: 4px

.news-imgs
    text-align: center
    > .news-image-caption
        display: inline-block
        margin: 2px

.left-right
    > p
        display: inline-block
        width: 80%
    > div
        display: inline-block
        width: 18%

</style>

