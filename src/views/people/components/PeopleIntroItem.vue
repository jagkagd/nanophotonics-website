<template lang="pug">
router-link.peopleItem.pure-g(:to="{name: 'person_page', params: {id: item.id}}")
    img.pure-u-1-3(:src="imgPath")
    .info.pure-u-2-3
        p.name {{ item.name | formatProfileName(item.degree, la) }}
        p.email Email: {{ item.email }} 
</template>

<script>

import * as R from 'ramda'

export default {
    name: 'PeopleIntroItem',
    props: {
        item: Object
    },
    computed: {
        imgPath () {
            try {
                return require('assets/images/people/' + this.item.id + '-0.jpg')
            } catch(err) {
                try {
                    return require('assets/images/people/' + this.item.id + '-1.jpg')
                } catch {
                    return require('assets/images/people/male.jpg')
                }
            }
        }
    },
    filters: {
        formatProfileName (value, degree, la) {
            const profileAbbr = R.path([degree, la], {
                'professor': {
                    en: 'Prof.',
                    zh: '教授'
                },
                'associate professor': {
                    en: 'Assoc. Prof.',
                    zh: '副教授'
                }
            })
            const name = value[la]
            return R.join(profileAbbr ? ' ' : '')({
                en: [profileAbbr, name],
                zh: [name, profileAbbr]
            }[la])
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

.peopleItem
    min-height: 122px
    margin: 5px
    background-color: base1
    padding: 5px
    border-radius: 5px
    border: 1px solid base3
    display: flex
    img
        width: 110px
        height: 110px
    > a
        padding: 0
        margin: 0

.info
    margin-left: 15px
    line-height: 2.5em
    padding-top: 16px

.name
    color: baseblue
    font-size: 16px
    margin: 2px auto

.email
    font-style: italic
    line-height: 1.2em
</style>
