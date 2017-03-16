<template lang="pug">
li.mainMenu(@click="$store.commit('switchLang')")
    a {{ lang[la] }}
</template>

<script>
export default {
    name: 'HeaderLangLi',
    data () {
        return {
            lang: {
                'en': '中文版',
                'zh': 'English'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

.mainMenu > a
    width: 100%
    height: 100%
    display: inline-table
    line-height: 2.5em
    
</style>
