// @flow

import metaData from './meta'
import _ from 'lodash'
import R from 'ramda'

const lings = ['zh', 'en']

const trims = R.replace(' ')('')

function _traverse(fold, transform, data) {
    return R.clone(fold(R.map(o => {
        const oo = transform(R.clone(o), R.clone(data))
        oo.children = _traverse(fold, transform, oo)
        return oo
    })(data.children)))
}
const traverse = R.curry(_traverse)

function extractInfo(item, parent = {}){
    let res = R.clone(item)
    res.ll = _.snakeCase(res.label)
    res.li.en = R.defaultTo(R.path(['li', 'en'], res), res.label)
    res.li = R.fromPairs(R.map(key => [key, R.defaultTo(R.path(['li', key], res), '')])(lings))
    res.title = R.mapObjIndexed((value, key, obj) => R.defaultTo(R.path(['title', key], res), value))(res.li) // Title Name
    res.file = trims(R.defaultTo(res.file, res.label)) // FileNameOfComponents
    if(res.typeName === 'pattern'){
        res.pattern = R.defaultTo(res.pattern, ':' + res.ll) // pattern_name
    }
    res.path = R.defaultTo(res.pattern, _.snakeCase(res.label)) // path_to_view
    res.routerTo = {name: res.ll} // {name: router_name}
    if(parent.typeName === 'pattern'){ // {name:parent_label, params: {parent_pattern: child_label}
        res = R.merge(R.dissoc('children')(parent))(res)
        res.routerTo = {
            name: parent.ll,
            params: {
                [parent.ll]: res.ll
            }
        }
    }
    return res
}

export const routeData = traverse(R.identity)(extractInfo)({children: metaData})

const toMenuData = (res, o) => R.concat(res)((o.typeName === 'pattern' && !R.isEmpty(o.children)) ? o.children : o)
export const expandPatternData = traverse(R.reduce(toMenuData, []))(R.nthArg(0))({children: routeData})
export const menuData = traverse(R.reject(R.prop('notOnMenu')))(R.nthArg(0))({children: expandPatternData})

const list2obj = (res, o) => R.merge(res)({[o.ll]: R.merge(R.clone(o))({subMenu: R.clone(o.children)})})
export const keyMetaData = traverse(R.reduce(list2obj, {}))(R.nthArg(0))({children: expandPatternData})

