<template lang="pug">
header
    #logos
        img#logo.pure-img(src="~images/home-logo.png")
        img#university.pure-img(src="~images/ZJU.png")
    header-nav
</template>

<script>

import HeaderNav from './HeaderNav.vue'

export default {
    name: 'WebHeader',
    data () {
        return {
            group: {
                en: 'Nanophotonics Group',
                zh: '微纳光子学研究组'
            }
        }
    },
    components: {
        HeaderNav
    }
}

</script>

<style lang="stylus" scoped>
@import '~static/basecolors.styl'

#logos
    background-color: base1
    margin-top: 0px
    margin-bottom: 10px
    border: 2px black
    padding: 15px 30px
    box-shadow: 3px 3px 3px black
    border-radius: 15px
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center

#logo
    width: 527px

#university
    width: 200px
</style>
