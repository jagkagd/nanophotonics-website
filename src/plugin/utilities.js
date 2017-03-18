import marked from 'marked'
import _ from 'lodash/fp'

 marked.setOptions({
     breaks: true
 })

const renderer = new marked.Renderer()
renderer.image = function(href: string, title: string, text: string): string {
    return '<div class="image-caption"><img src="static/img/' + href + '" />' + '<p>' + (_.isNil(title) ? '' : title) + '</p></div>'
}

function t2i(obj) {
    if(_.isArray(obj)) return _.map(o => t2i(o))(obj)
    if(!_.isPlainObject(obj)) return obj
    const ling = ['zh', 'en']
    let res = _.cloneDeep(obj)
    _.map(o => {
        const name = o.split('_')[0]
        const lang = o.split('_')[1]
        if(_.includes(lang)(ling)){
            if(_.isNil(res[name])){
                res[name] = {}
            }
            res[name][lang] = res[o]
        }
    })(_.keys(obj))
    res = _.mapValues(t2i)(res)
    return res
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
                t2i
            }
        })
        Vue.directive('md', (el, binding) => {
            el.innerHTML = marked(binding.value, {renderer})
        })
    }
}
