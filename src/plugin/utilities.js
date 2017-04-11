import marked from 'marked'
import _ from 'lodash/fp'
import * as methods from './methods'
import * as filters from './filters'
import * as computed from './computed'

export default {
    install (Vue, options) {
        Vue.mixin({
            computed,
            methods,
            filters
        })
        Vue.directive('md', (el, binding) => {
            const modifiers = binding.modifiers
            const category = binding.arg || 'default'
            const renderer = new marked.Renderer()
            if(modifiers.images){
                renderer.image = function(href, title, text) {
                    return '<figure class="' + category + '-figure"><img src="/static/img/' + href + '" />' + (_.isNil(title) ? '' : '<figcaption>' + title + '</figcaption>') + '</figure>'
                }
            }
            const options = {
                renderer,
                breaks: !modifiers.nobreak
            }
            el.innerHTML = marked.inlineLexer(binding.value || '', [], options)
        })
    }
}
