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
                console.log('in renderer parent', modifiers, category)
                renderer.image = function(href, title, text) {
                    console.log('in renderer', category)
                    return '<figure class="' + category + '-figure"><img src="/static/img/' + href + '" />' + (_.isNil(title) ? '' : '<figcaption>' + title + '</figcaption>') + '</figure>'
                }
            }
            marked.setOptions({
                breaks: !modifiers.nobreak
            })
            el.innerHTML = marked(binding.value || '', {renderer})
        })
    }
}
