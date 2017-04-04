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
            const renderer = new marked.Renderer()
            marked.setOptions({
                breaks: !modifiers.nobreak
            })
            if(modifiers.images){
                renderer.image = function(href, title, text) {
                    return '<div class="news-image-caption"><img src="/static/img/' + href + '" />' + (_.isNil(title) ? '' : '<p>' + title + '</p>') + '</div>'
                }
            }
            el.innerHTML = marked(binding.value || '', {renderer})
        })
    }
}
