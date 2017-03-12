<template lang="pug">
div
    router-link(:to="'/people/intro/'+item.id")
        img(:src="imgPath")
        div.info
            p.name {{ item.nameEn }}
            p.email {{ item.email }} 
</template>

<script>
// @flow

export default {
    name: 'PeopleIntroItem',
    props: {
        item: Object
    },
    computed: {
        imgPath () {
            return require('assets/images/people/people-' + this.item.id + '-intro.jpg')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'
div
    width: 340px
    background-color: base1
    padding: 5px
    border-radius: 5px
    border: 1px solid base3
    img
        display: inline
        width: 110px
        height: 110px

.info
    display: inline

.name
    color: blue
    font-size: 16px

.email
    font-style: italic

</style>
