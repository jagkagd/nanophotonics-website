// @flow

import metaData from './meta'
import _ from 'lodash/fp'

function trims(value) {
    return _.replace(' ')('')(value)
}

function extractInfo(item){
    item.ll = item.label.en // label
    item.c = {}
    item.c.name = item.name || item.ll // k for route match name
    item.c.path = item.path || item.c.name // k for router path
    item.c.pattern = item.pattern || item.c.path // k for router match path
    item.c.file = item.file || item.c.pattern // for import component
    item.t = _.mapValues(o => trims(o))(item.c)
    item.k = _.mapValues(o => _.snakeCase(o))(item.c)
    item.routerTo = {name: item.k.pattern}
    if(!_.isNil(item.pattern)){
        item.routerTo.params = {}
        item.routerTo.params[item.k.pattern] = item.k.name
    }
    return item
}

const routeData = _.map(o => {
    o = extractInfo(o)
    o.children = _.map(oo => extractInfo(oo))(o.children)
    return o
})(metaData)

const menuData = _.filter(o => !o.notOnMenu)(routeData)

export {routeData, menuData}

