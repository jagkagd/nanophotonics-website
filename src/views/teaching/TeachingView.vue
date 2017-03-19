<template lang="pug">
div
    h1.viewTitle {{ label }}
    ol
        li(v-for="item in items")
            span.course {{ item.course[la] }} 
            span.num (Course No.{{ item.number }}, {{ item.grad[la] }})
            br
            span.lecturers Lecturers: {{ item.lecturers[la] }}
</template>

<script>
// @flow

import course from 'flow/typedef.js'

export default {
    data (): {items: Array<course>}{
        return {
            items: []
        }
    },
    mounted () {
        this.getData('courses').then(res => {
            this.items = res.data
        })
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
