<template lang="pug">
.peopleItem.pure-g
    img.pure-u-1-3(:src="imgPath")
    .info.pure-u-2-3
        p.name {{ item.name[la] }}
        p.year {{ item.year_start }} - {{item.year_end}}
        p.present-state {{ item | presentState(la) }} 
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
        presentState (item, la) {
            let s = item.presentState[la].split("+");
            if(s.length === 1) return s[0];
            return s[1] + " (" + s[0] + ")";
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
    line-height: 1.2em

.year
    margin: 2px auto
    line-height: 1.2em

.present-state
    line-height: 1.2em
</style>
