<template lang="pug">
article(v-if="showPage")
    img.thumb(:src="imgPath")
    .basicInfo
        p.name {{ item.name[la] }}
        p {{ item.degree | trans2FormalDegree }} {{ item.degree_extra }}
        p Department of Optical Engineering
        p Zhejiang University
        p Hangzhou 310027, China
        p
            span(v-if="item.tel") Tel: {{ item.tel }},
            span Email: {{ item.email }}
    .detailInfo(v-md="item.cv")
</template>

<script>

import {SubView} from 'plugin/SubView'

export default SubView.extend({
    name: 'PersonPage',
    data () {
        return {
            item: {},
            showPage: false
        }
    },
    mounted () {
        this.item = this.getData('people', {id: this.$route.params.id})[0];
        this.$store.commit('changeMenuName', this.menuName);
        this.showPage = true;
    },
    computed: {
        imgPath () {
            try{
                return require('assets/images/people/' + this.item.id + '-1.jpg')
            }catch(err){
                return require('assets/images/people/' + this.item.id + '-0.jpg')
            }
        },
        menuName () {
            return {
                'undergraduate':       'undergrad_students',
                'master':              'grad_students',
                'PhD':                 'grad_students',
                'poster doctor':       'post_docs',
                'admin staff':         'admin_staff',
                'professor':           'faculty',
                'associate professor': 'faculty'
            }[this.item.degree]
        }
    },
    filters: {
        trans2FormalDegree (value) {
            return {
                'undergraduate':       'Undergraduate Student',
                'master':              'Master',
                'PhD':                 'PhD Student',
                'poster doctor':       'Postdoctor',
                'admin staff':         'Admin Staff',
                'professor':           'Professor',
                'associate professor': 'Associate Professor'
            }[value]
        }
    }
})
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
