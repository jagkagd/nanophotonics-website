<template lang="pug">
div(v-if="showPage")
    div.thumb
        img(:src="imgPath")
    div.basicInfo
        p.name {{ item.name[la] }}
        p {{ item.degree | trans2FormalDegree }}
        p Department of Optical Engineering
        p Zhejiang University
        p Hangzhou 310027, China
        p Tel: {{ item.tel }},  Email: {{ item.email }}
    div.detailInfo(v-md="item.cv || ''")
</template>

<script>
// @flow

export default {
    name: 'PersonPage',
    data () {
        return {
            item: {},
            showPage: false
        }
    },
    beforeMount () {
        this.getData('people?id=' + this.$route.params.id).then(res => {
            this.item = res.data[0]
            this.showPage = true
        })
    },
    computed: {
        imgPath () {
            try{
                return require('assets/images/people/' + this.item.id + '-1.jpg')
            }catch(err){
                return require('assets/images/people/' + this.item.id + '-intro.jpg')
            }
        },
        menuName () {
            const cor = {
                'undergraduate':       'undergrad_students',
                'master':              'grad_students',
                'PhD':                 'grad_students',
                'poster doctor':       'post_docs',
                'admin staff':         'admin_staff',
                'professor':           'faculty',
                'associate professor': 'faculty'
            }
            return cor[this.item.degree]
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
.thumb
    width: 160px
    height: 200px
    display: inline-block

.basicInfo
    display: inline-block
    margin-left: 20px
    font-style: italic

.name
    font-size: 20px
    font-weight: bold
    font-style: normal
    color: rgb(204, 0, 51)
</style>

