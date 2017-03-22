<template lang="pug">
div
    ol
        li(v-for="item in items")
            span.course {{ item.course[la] }} 
            span.num ({{ courseLabel[la] }}{{ item.number }}, {{ item.grad[la] }})
            br
            span.lecturers {{ lecturersLabel[la] }}: {{ item.lecturers[la] }}
</template>

<script>
// @flow

import course from 'flow/typedef.js'
import {SubView} from 'plugin/SubView'

export default SubView.extend({
    data (): {items: Array<course>}{
        return {
            items: [],
            lecturersLabel: {
                en: 'Lecturers',
                zh: '教师'
            },
            courseLabel: {
                en: 'Course No.',
                zh: 'No.'
            }
        }
    },
    mounted () {
        this.getData('courses').then(res => {
            this.items = res.data
        })
    }
})
</script>

<style lang="stylus" scoped>
li
    margin: 0.5em 0

.course
    font-weight: bold

.num
    color: blue
</style>
