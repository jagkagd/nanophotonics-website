<template lang="pug">
div.peopleItem
    router-link(:to="{name: 'person_page', params: {id: item.id}}")
        img(:src="imgPath")
    router-link(:to="{name: 'person_page', params: {id: item.id}}")
        div.info
            p.name {{ item.name | formatProfileName(item.degree, la) }}
            p.email Email: {{ item.email }} 
</template>

<script>
// @flow

import _ from 'lodash/fp'

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
    },
    filters: {
        formatProfileName (value, degree, la) {
            const name = value[la]
            let profileAbbr = {
                'professor': {
                    en: 'Prof.',
                    zh: '教授'
                },
                'associate professor': {
                    en: 'Assoc. Prof.',
                    zh: '副教授'
                }
            }[degree]
            profileAbbr = _.isNil(profileAbbr) ? '' : profileAbbr[la]
            return profileAbbr ? {
                en: profileAbbr + ' ' + name,
                zh: name + ' ' + profileAbbr
            }[la] : name
        }
    }
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
    display: flex
    img
        width: 110px
        height: 110px

.info
    margin-left: 15px
    line-height: 2.5em

.name
    color: blue
    font-size: 16px

.email
    font-style: italic

</style>
