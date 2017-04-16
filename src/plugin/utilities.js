import marked from 'marked'
import _ from 'lodash'
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
            const value = binding.value || ''
            const modifiers = binding.modifiers
            const category = binding.arg || 'default'
            const renderer = new marked.Renderer()
            if(modifiers.images){
                renderer.image = (href, title, text) => _.template(
                    `<figure class="<%= category %>-figure">
                        <img src="/static/img/<%= href %>" />
                            <% if(title){ %>
                                <figcaption><%= title %></figcaption>
                            <% } %>
                    </figure>`
                )({href, title, category})
            }
            marked.setOptions({
                breaks: !modifiers.nobreak
            })
            el.innerHTML = modifiers.inline ? marked.inlineLexer(value, []) : marked(value, {renderer})
        })
    }
}
