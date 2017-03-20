import Router from 'vue-router'
import {routeData} from 'static/meta-data'
import {patternMap} from 'static/meta'
import _ from 'lodash/fp'

const comps = {}
_.forEach(page => {
    if(page.notPreset || _.isEmpty(page.children)){
        comps[page.t.file] = require('src/views/' + page.k.file.toLowerCase() + '/' + page.t.file + 'View.vue')
    }
    _.forEach(item => {
        comps[item.t.file] = require('src/views/' + page.k.file.toLowerCase() + '/' + item.t.file + 'View.vue')
    })(page.children)
})(routeData)
comps.Preset = require('src/views/PresetView.vue')

const routesData = _.map(page => {
    const res = {
        path: '/' + page.k.path
    }
    if(!_.isEmpty(page.children)){
        res.name = page.k.name
        res.component = comps[page.notPreset ? page.t.file : 'Preset']
        res.redirect = page.children[0].routerTo
        res.children = _.flow(
            _.map(item => ({
                path: patternMap[item.pattern] || item.k.path,
                name: item.k.pattern,
                component: comps[item.t.file]
            })),
            _.uniqBy('name')
        )(page.children)
    }else{
        if(page.notPreset){
            res.name = page.k.name
            res.component = comps[page.t.file]
        }else{
            res.component = comps.Preset
            res.redirect = res.path + '/'
            res.children = [{
                path: '',
                name: page.k.name,
                component: comps[page.t.file]
            }]
        }
    }
    return res
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

