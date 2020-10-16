<template lang="pug">
.peopleItem.pure-g
    a.pure-u-1-3(:href="item.link")
        img(:src="imgPath")
    .pure-u-2-3(:href="item.link")
        .info
            p.name {{ item.name[la] }} Subgroup
            p.email Email: {{ item.email }}
</template>

<script>

export default {
    name: 'PeopleIntroItem',
    props: {
        item: Object
    },
    computed: {
        imgPath () {
            return require('assets/images/people/' + this.item.imgPath)
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

.peopleItem
    margin: 5px
    background-color: base1
    padding: 5px
    border-radius: 5px
    border: 1px solid base3
    img
        width: 110px
        height: 110px
    > a
        padding: 0
        margin: 0

.info
    margin-left: 15px
    line-height: 2.5em

.name
    color: baseblue
    font-size: 16px

.email
    font-style: italic
</style>
