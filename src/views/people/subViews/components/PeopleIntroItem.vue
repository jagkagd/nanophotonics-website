<template lang="pug">
div.peopleItem
    router-link(:to="'/people/intro/'+item.id")
        img(:src="imgPath")
    router-link(:to="'/people/intro/'+item.id")
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
            try{
                return require('assets/images/people/' + this.item.id + '-intro.jpg')
            }catch(err){
                return require('assets/images/people/' + this.item.id + '-1.jpg')
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

.peopleItem
    width: 340px
    background-color: base1
    padding: 5px
    border-radius: 5px
    border: 1px solid base3
    > a
        display: inline-block
    img
        display: inline
        width: 110px
        height: 110px

.info
    padding-left: 10px
.name
    color: blue
    font-size: 16px

.email
    font-style: italic

</style>
