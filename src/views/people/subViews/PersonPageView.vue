<template lang="pug">
div(v-if="showPage")
    div.thumb
        img(:src="imgPath" width="160" height="200")
    div.basicInfo
        p {{ item.nameEn }} ({{ item.nameCn }})
        p {{ item.degree | trans2FormalDegree }}
        p Department of Optical Engineering
        p Zhejiang University
        p Hangzhou 310027, China
        p Tel: {{ item.tel }},  Email: {{ item.email }}
    div.detailInfo(v-html="compliedMarkdown")
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
            item: {},
            showPage: false
        }
    },
    beforeMount () {
        axios.get('/api.php/people?id=' + this.$route.params.id).then(res => {
            this.item = res.data[0]
            this.showPage = true
        })
    },
    computed: {
        compliedMarkdown () {
            return (_.isNil(this.item.cv)) ? '' : marked(this.item.cv)
        },
        imgPath () {
            try{
                return require('assets/images/people/' + this.item.id + '-1.jpg')
            }catch(err){
                return require('assets/images/people/' + this.item.id + '-intro.jpg')
            }
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

<style lang="stylus" scoped>
.thumb, .basicInfo
    display: inline-block
</style>

