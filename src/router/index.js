import Vue from 'vue'
import VueRouter from 'vue-router'
import {routeData} from '@/meta-data'
import * as R from 'ramda'

Vue.use(VueRouter)

const comps = {}
R.forEach(page => {
    if(R.isEmpty(page.children)){
        comps[page.label] = () => import('@/views/' + page.ll + '/' + page.file + 'View.vue')
    }
    R.forEach(item => {
        comps[item.label] = () => import('@/views/' + page.ll + '/' + item.file + 'View.vue')
    })(page.children)
})(routeData)
comps['Preset'] = () => import('@/views/PresetView.vue')

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
    component: comps['Index'],
})

export default new VueRouter({
    mode: 'hash',
    scrollBehavior (to, from, savedPosition) {
        if(to.hash){
            return {
                selector: to.hash
            }
        }
    },
    routes: routesData
})
