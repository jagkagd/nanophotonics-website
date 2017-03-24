import marked from 'marked'
import _ from 'lodash/fp'
import {getData} from './methods'
import {formatJournal, formatAuthors, formatClass} from './filters'
import {la, routeInfo} from './computed'

 marked.setOptions({
     breaks: true
 })

const renderer = new marked.Renderer()
renderer.image = function(href, title, text) {
    return '<div class="image-caption"><img src="/static/img/' + href + '" />' + '<p>' + (_.isNil(title) ? '' : title) + '</p></div>'
}

export default {
    install (Vue, options) {
        Vue.mixin({
            computed: {
                la,
                routeInfo
            },
            methods: {
                getData
            },
            filters: {
                formatJournal,
                formatAuthors,
                formatClass
            }
        })
        Vue.directive('md', (el, binding) => {
            el.innerHTML = marked(binding.value || '', {renderer})
        })
    }
}
