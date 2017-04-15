// @flow

import metaData from './meta'
import _ from 'lodash/fp'
import {defaultTo, cloneDeep} from 'lodash'

const lings = ['zh', 'en']

const trims = _.replace(' ')('')

function traverse(method, transform, data) {
    console.log(data)
    const _transform = o => {
        const oo = transform(cloneDeep(o), cloneDeep(data))
        oo.children = traverse(method, transform, oo.children)
        return oo
    }
    return cloneDeep(_.reduce(method(_transform)(data))
}

function extractInfo(item, parent = {}){
    let res = cloneDeep(item)
    res.ll = _.snakeCase(res.label)
    res.li = defaultTo(res.li, {}) // Nav Name
    res.li.en = defaultTo(res.label, res.li.en)
    res.li = _.fromPairs(_.map(key => [key, defaultTo(res.li[key], '')])(lings))
    res.title = defaultTo(res.title, {}) // Nav Name
    res.title = _.mapValues((value, key) => defaultTo(res.title[key], value))(res.li) // Title Name
    res.file = res.notPreset ? trims(defaultTo(res.file, res.label)) : 'Preset' // FileNameOfComponents
    if(res.typename === 'pattern'){
        res.pattern = defaultTo(res.pattern, _.join([':', res.ll])) // pattern_name
    }
    res.path = defaultTo(res.pattern, _.snakeCase(res.label)) // path_to_view
    res.routerTo = {name: res.ll} // {name: router_name}
    if(parent.typename === 'pattern'){ // {name:parent_label, params: {parent_pattern: child_label}
        res = _.defaults(parent)(res)
        res.routerTo = {
            name: parent.ll,
            params: {
                [parent.ll]: res.ll
            }
        }
    }
    return res
}

const toMenuData = (res, o) => o.typename === 'pattern' ? _.concat(res)(_.map(toMenuData(o.children)) : _.concat(res)(o)

    const _modify = o => {
        const oo = modify(cloneDeep(o), cloneDeep(data))
        oo.children = _traverse(merge, modify, predictBefore, oo.children)
        return oo
    }
export const routeData = traverse(_.map)(extractInfo)(routeData)
export const expandPatternData = traverse(_.flip(_.reduce)([]))(toMenuData)(routeData)
export const menuData = traverse(_.filter)(o => !o.notOnMenu)(expandPatternData)

function list2obj(data){
    return cloneDeep(_.reduce((res, o) => {
        res[o.ll] = cloneDeep(o)
        res[o.ll].children = cloneDeep(list2obj(o.children))
        res[o.ll].subMenu = cloneDeep(o.children)
        return res
    }, {})(data))
}

export const keyMetaData = list2obj(expandPatternData)
console.log(metaData, routeData, expandPatternData, menuData, keyMetaData)

