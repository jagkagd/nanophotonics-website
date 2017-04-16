<template lang="pug">
section(v-for="year in years")
    h2 Group Photo in {{ year }}
    img(:src="require('images/beyond_light/group-photo-'+year+'.jpg')")
</template>

<script>
// @flow


export default {
    name: 'GroupPhotos',
    data () {
        return {
            years: [2016, 2015]
        }
    }
}
</script>

<style lang="stylus" scoped>
</style>

