<template lang="pug">
section(:class="item.style" v-md.nobreak.images:news="modifiedContent")
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
            return'<span class="news-date">' + formatDate(this.item) + '</span>, ' + this.item.content[this.la]
        }
    }
}
</script>

<style lang="stylus">

.news-date
    color: blue

figure.news-figure
    text-align: center
    img
        max-width: 600px
    figcaption
        font-size: 12px
        margin: 4px

.news-imgs
    text-align: center
    > figure
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

