import marked from 'marked'

 marked.setOptions({
     breaks: true
 })

const renderer = new marked.Renderer()
renderer.image = function(href: string, title: string, text: string): string {
    return '<div class="image-caption"><img src="static/img/' + href + '" />' + '<p>' + (_.isNil(title) ? '' : title) + '</p></div>'
}

export default {
    install (Vue, options) {
        Vue.mixin({
            computed: {
                la () {
                    return this.$store.state.lang
                }
            }
        })
        Vue.directive('md', {
            inserted (el, binding) {
                const value = binding.value
                const mdHTML = marked(value, {renderer})
                el.innerHTML = mdHTML
            }
        })
    }
}
