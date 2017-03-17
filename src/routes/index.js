import Router from 'vue-router'
import meta-data from 'src/meta-data.json'
import _ from 'lodash/fp'

let comps = {}
_.forEach(page => {
    const label = page.label['en']
    const rlabel = _.replace(' ')('')(label)
    comps[rlabel] = require('src/views/' + _.toLower(page.file || rlabel) + '/' + (page.file || rlabel) + 'View.vue')
    _.forEach(item => {
        const label = item.label['en']
        comps[label] = require('src/views/' + _.toLower(item.file || label) + '/subViews/' + (item.file || label) + 'View.vue'))
    })(page.children)
})(meta-data)

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if(to.hash){
            return {
                selector: to.hash
            }
        }
    },
    routes: _.map(page => {
        const label = page.label['en']
        const klabel = _.kebabCase(label)
        let res = {
            path: '/' + (page.path || klabel),
            name: page.name || klabel,
            component: comps[label],
            children: _.map(item => {
                const label = item.label['en']
                const klabel = _.kebabCase(label)
                const pattern = item.pattern || ''
                const rpattern = _.replace(' ')('')(pattern)
                const kpattern = _.kebabCase(pattern)
                return {
                    path: pattern ? ':' + kpattern : klabel,
                    name: kpattern || klabel,
                    component: comps[rpattern || label]
                }
            })(page.children)
        }
        if(page.children){
            res.redirect = res.path + '/' + _.kebabCase(page.children[0].label['en'])
        }
        return res
    })(meta-data)
}

