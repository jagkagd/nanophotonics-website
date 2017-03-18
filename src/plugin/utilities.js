import marked from 'marked'
import _ from 'lodash/fp'
import trans2i18n from 'methods'

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
            },
            methods: {
                trans2i18n
            }
        })
        Vue.directive('md', (el, binding) => {
            el.innerHTML = marked(binding.value, {renderer})
        })
    }
}
