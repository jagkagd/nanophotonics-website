<template lang="pug">
div
    h2.viewTitle {{ phdtitle[la] }}
    hr
    ul.pure-g
        li.pure-u-lg-1-2.pure-u-md-1-1(v-for="item in phditems")
            former-people-intro-item(:item="item")
    h2.viewTitle {{ mastertitle[la] }}
    hr
    ul.pure-g
        li.pure-u-lg-1-2.pure-u-md-1-1(v-for="item in masteritems")
            former-people-intro-item(:item="item")
</template>

<script>

import FormerPeopleIntroItem from './components/FormerPeopleIntroItem'
import {SubView} from 'plugin/SubView'
import * as R from 'ramda'

export default SubView.extend({
    name: 'AfterGraduationView',
    data () {
        return {
            items: [],
            phditems: [],
            masteritems: [],
            phdtitle: {
                'zh': '博士研究生',
                'en': 'PhD',
            },
            mastertitle: {
                'zh': "硕士研究生",
                'en': 'Master',
            }
        }
    },
    mounted () {
        this.$store.commit('changeMenuName', 'after_graduation');
        this.items = this.getData('people', {category: 'former'});
        let sortWith = R.sortWith([R.descend(R.prop('year_end'))])
        this.phditems = sortWith(R.filter(R.propEq('degree', 'PhD'), this.items));
        this.masteritems = sortWith(R.filter(R.propEq('degree', 'master'), this.items));
    },
    components: {
        FormerPeopleIntroItem
    },
})
</script>
