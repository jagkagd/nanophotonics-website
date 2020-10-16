<template lang="pug">
ol
    li(v-for="item in items")
        span.course {{ item.course[la] }} 
        span.num ({{ courseLabel[la] }}{{ item.number }}, {{ item.grad[la] }})
        br
        span.lecturers {{ lecturersLabel[la] }}: {{ item.lecturers[la] }}
</template>

<script>

import {SubView} from 'plugin/SubView'

export default SubView.extend({
    data () {
        return {
            items: [],
            lecturersLabel: {
                en: 'Lecturers',
                zh: '教师'
            },
            courseLabel: {
                en: 'Course No. ',
                zh: 'No.'
            }
        }
    },
    mounted () {
        this.items = this.getData('courses');
    }
})
</script>

<style lang="stylus" scoped>
ol
    list-style-position: outside
    li
        margin: 0.5em 0

.course
    font-weight: bold

.num
    color: #0080cf
</style>
