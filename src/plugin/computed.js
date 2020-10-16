function la () {
    return this.$store.state.lang
}

function routeInfo () {
    return this.$route.matched
}

export default {
    la,
    routeInfo,
}
