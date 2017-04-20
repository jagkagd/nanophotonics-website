import Router from 'vue-router'
import {routeData} from 'src/meta-data'
import R from 'ramda'

const comps = {}
R.forEach(page => {
    if(R.isEmpty(page.children)){
        comps[page.label] = require('src/views/' + page.ll + '/' + page.file + 'View.vue')
    }
    R.forEach(item => {
        comps[item.label] = require('src/views/' + page.ll + '/' + item.file + 'View.vue')
    })(page.children)
})(routeData)
comps['Preset'] = require('src/views/PresetView.vue')

const routesData = R.map(page => {
    const init = {
        path: '/' + page.path,
        component: page.notPreset === true ? comps[page.label] : comps['Preset']
    }
    const hasChildren = {
        name: page.ll,
        redirect: (page.children[0] || {}).routerTo,
        children: R.map(item => ({
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
    return R.merge(init)(R.isEmpty(page.children) ? noChildren : hasChildren)
})(R.tail(routeData))

routesData.unshift({
    path: '/',
    name: 'index',
    component: comps['Index']
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

