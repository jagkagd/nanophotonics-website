import Router from 'vue-router'
import metaData from 'static/meta-data'
import _ from 'lodash/fp'

const comps = {}
_.forEach(page => {
    comps[page.t.file] = require('src/views/' + page.k.file.toLowerCase() + '/' + page.t.file + 'View.vue')
    _.forEach(item => {
        comps[item.t.file] = require('src/views/' + page.k.file.toLowerCase() + '/subViews/' + item.t.file + 'View.vue')
    })(page.children)
})(metaData)

const routesData = _.map(page => {
    const res = {
        path: '/' + page.k.path,
        name: page.k.name,
        component: comps[page.t.file]
    }
    if(!_.isEmpty(page.children)){
        res.redirect = page.children[0].routerTo
        res.children = _.flow(
            _.map(item => {
                return {
                    path: !_.isNil(item.pattern) ? (':' + item.k.pattern) : item.k.path,
                    name: item.k.pattern,
                    component: comps[item.t.file]
                }
            }),
            _.uniqBy('path')
        )(page.children)
    }
    return res
})(metaData)

routesData.unshift({
    path: '/',
    name: 'home',
    component: comps.Index
})

console.log(routesData)

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if(to.hash){
            return {
                selector: to.hash
            }
        }
    },
    routes: routesData
})

