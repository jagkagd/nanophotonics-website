// @flow

import metaData from './meta'
import _ from 'lodash/fp'
import {defaultTo} from 'lodash'

const lings = ['zh', 'en']

const trims = _.replace(' ')('')
const defaultsList = values => 
    values.length === 2 ? defaultTo(values[0], values[1]) : defaultTo(_.head(values), defaultsList(_.tail(values)))

function extractInfo(item){
    item.ll = _.snakeCase(item.label)
    item.li = defaultTo(item.li, {}) // Nav Name
    item.li.en = defaultTo(item.label, item.li.en)
    item.li.zh = defaultTo(item.li.zh, '')
    item.title = _.mapValues((value, key) => defaultTo(item.title[key], value))(item.li) // Title Name
    item.file = trims(defaultsList(item.file, item.label)) // FileNameOfComponents
    if(item.typename === 'pattern'){
        item.pattern = defaultTo(item.pattern, _.join([':', item.ll])) // pattern_name
    }
    item.path = trims(defaultsList(item.path, item.pattern, item.label)) // router_name
    item.routerTo = {name: item.ll}
    if(!_.isNil(item.pattern)){
        item.routerTo.params = {}
        item.routerTo.params[item.pattern] = item.ll
    }
    return item
}

function traverse(modify, data) {
    const _modify = o => {
        const oo = modify(_.cloneDeep(o))
        oo.children = traverse(modify, oo.children)
        return oo
    }
    return _.map(_modify)(data)
}

function list2obj(data){
    return _.reduce((res, o) => {
        res[_.snakeCase(o.ll)] = _.cloneDeep(o)
        res[_.snakeCase(o.ll)].children = _.cloneDeep(list2obj(o.children))
        res[_.snakeCase(o.ll)].subMenu = _.cloneDeep(o.children)
        return res
    }, {})(data)
}
const menuData = list2obj(traverse(extractInfo, metaData))

export default list2obj(menuData)

