import Router from 'vue-router'
import {routeData} from 'src/meta-data'
import _ from 'lodash/fp'

const comps = {}
_.forEach(page => {
    if(_.isEmpty(page.children)){
        comps[page.label] = require('src/views/' + page.file.toLowerCase() + '/' + page.file + 'View.vue')
    }
    _.forEach(item => {
        comps[item.label] = require('src/views/' + page.file.toLowerCase() + '/' + item.file + 'View.vue')
    })(page.children)
})(routeData)

const routesData = _.map(page => {
    const init = {
        path: '/' + page.path,
        component: comps[page.label]
    }
    const hasChildren = {
        name: page.ll,
        redirect: page.children[0].routerTo,
        children: _.map(item => ({
            path: item.path,
            name: item.ll,
            component: comps[item.label]
        }))(page.children)
    }
    const noChildren = {
        redirect: '/' + page.path + '/',
        children: [{
            path: '',
            name: page.ll,
            component: comps[page.label]
        }]
    }
    return Object.assign(init, page.children ? hasChildren : noChildren)
})(routeData)

routesData.unshift({
    path: '/',
    redirect: 'index'
})

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

