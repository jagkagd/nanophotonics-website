<template lang="pug">
article
    section(v-for="year in years")
        h2(v-show="(la==='en')") {{ title[la] }} {{ year }}
        h2(v-show="(la==='zh')") {{ year }} {{ title[la] }}
        img(:src="require('images/beyond_light/group-photo-'+year+'.jpg')")
</template>

<script>

export default {
    name: 'GroupPhotos',
    data () {
        return {
            years: [2019, 2018, 2017, 2016, 2015],
            title: {
                'en': "Group photo in",
                'zh': "年研究组合照"
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
h2
    color: #0070c0
    font-size: 14px

img
    max-width: 95%
    height: auto
</style>
