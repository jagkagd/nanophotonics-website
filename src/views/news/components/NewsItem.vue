<template lang="pug">
div(:class="item.style")
    div(v-html="compliedContent")
</template>

<script>
// @flow
import marked from 'marked'
import _ from 'lodash'
const renderer = new marked.Renderer()

renderer.image = function(href: string, title: string, text: string): string {
    return '<div class="image-caption"><img src="static/img/' + href + '" />' + '<p>' + (_.isNil(title) ? '' : title) + '</p></div>'
}

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
        compliedContent (): string {
            return marked('<span class="date">' + this.item.date + '</span>, ' + this.item.content, {renderer})
        }
    }
}
</script>

<style lang="stylus" scoped>

.date
    display: inline

</style>

