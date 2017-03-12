<template lang="pug">
div
    h1.viewTitle Grad and Undergrad Courses
    ol
        li(v-for="item in items")
            span.course {{ item.course }}
            span.num (Course No.{{ item.number }}, {{ item.grad | capitalize }})
            br
            span.lecturers Lecturers: {{ item.lecturers }}
</template>

<script>
// @flow

import course from 'flow/typedef.js'
import axios from 'axios'
import _ from 'lodash'

export default {
    data (): {items: Array<course>}{
        return {
            items: []
        }
    },
    mounted () {
        axios.get('/api.php/courses').then(res => {
            this.items = res.data
        })
    },
    filters: {
        capitalize: _.capitalize // todo
    }
}
</script>

<style lang="stylus" scoped>
li
    margin: 5px 0

.course
    font-weight: bold

.num
    color: blue
</style>
