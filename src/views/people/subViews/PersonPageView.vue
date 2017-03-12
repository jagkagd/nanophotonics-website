<template lang="pug">
div
    div
        img(:src="imgPath" width="160" height="200")
    div
        p {{ item.nameEn }} ({{ item.nameCn }})
        p {{ item.degree | trans2FormalDegree }}
        p Department of Optical Engineering
        p Zhejiang University
        p Hangzhou 310027, China
        p Tel: {{ item.tel }},  Email: {{ item.email }}
    div(v-html="compliedMarkdown")
</template>

<script>
// @flow
import marked from 'marked'
import axios from 'axios'
import _ from 'lodash'

export default {
    name: 'PersonPage',
    data () {
        return {
            item: {cv: ''}
        }
    },
    mounted () {
        axios.get('/api.php/people?id=' + this.$route.params.id).then(res => {
            this.item = res.data[0]
        })
    },
    computed: {
        compliedMarkdown () {
            if(_.isNil(this.item.cv)){
                return ''
            }else{
                return marked(this.item.cv)
            }
        },
        imgPath () {
            return require('assets/images/people/people-' + this.item.id + '-detail.jpg')
        }
    },
    filters: {
        trans2FormalDegree (value: string): string {
            const formalDegrees = {
                'undergraduate':       'Undergraduate Student',
                'master':              'Master',
                'PhD':                 'PhD Student',
                'poster doctor':       'Postdoctor',
                'admin staff':         'Admin Staff',
                'professor':           'Professor',
                'associate professor': 'Associate Professor',
                'former':              'Former'
            }
            return formalDegrees[value]
        }
    }
}
</script>
