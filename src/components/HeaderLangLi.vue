<template lang="pug">
li(@click="$store.commit('switchLang')")
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
