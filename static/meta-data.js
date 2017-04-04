// @flow

import metaData from './meta'
import _ from 'lodash/fp'

const trims = _.replace(' ')('')

function extractInfo(item){
    const lings = ['zh', 'en']
    item.ll = item.label.en // label
    item.title = item.title || {}
    _.map(o => {item.title[o] = item.title[o] === '' ? '' : item.title[o] || item.label[o]})(lings)
    item.li = item.li || {}
    _.map(o => {item.li[o] = item.li[o] || item.label[o]})(lings)
    item.c = {}
    item.c.name = item.name || item.ll // k for route match name
    item.c.path = item.path || item.c.name // k for router path
    item.c.pattern = item.pattern || item.c.path // k for router match path
    item.c.file = item.file || item.c.pattern // for import component
    item.t = _.mapValues(trims)(item.c)
    item.k = _.mapValues(_.snakeCase)(item.c)
    item.routerTo = {name: item.k.pattern}
    if(!_.isNil(item.pattern)){
        item.routerTo.params = {}
        item.routerTo.params[item.k.pattern] = item.k.name
    }
    return item
}

function _traverse(predict, modify, data) {
    const _modify = o => {
        const oo = modify(_.cloneDeep(o))
        oo.children = _traverse(predict, modify, oo.children)
        return oo
    }
    return _.filter(predict)(_.map(_modify)(data))
}
const traverse = _.curry(_traverse)

const routeData = traverse(o => true)(extractInfo)(metaData)
const menuData = traverse(o => !o.notOnMenu)(_.identity)(routeData)

function list2obj(data){
    return _.reduce((res, o) => {
        res[_.snakeCase(o.ll)] = _.cloneDeep(o)
        res[_.snakeCase(o.ll)].children = _.cloneDeep(list2obj(o.children))
        res[_.snakeCase(o.ll)].subMenu = _.cloneDeep(o.children)
        return res
    }, {})(data)
}

const keyRouteData = list2obj(routeData)
const keyMenuData = list2obj(menuData)

export {routeData, menuData, keyRouteData, keyMenuData}

