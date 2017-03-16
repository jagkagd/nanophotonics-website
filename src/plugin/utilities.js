import marked from 'marked'
import _ from 'lodash/fp'

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
        Vue.directive('md', (el, binding) => {
            el.innerHTML = marked(binding.value, {renderer})
        })
        Vue.directive('dysrc', (el, binding) => {
            console.log(binding.value)
            el.src = require(binding.value)
        })
    }
}
