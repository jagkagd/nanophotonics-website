// @flow

import metaData from './meta'
import _ from 'lodash/fp'
import {defaultTo, cloneDeep} from 'lodash'
import R from 'ramda'

const lings = ['zh', 'en']

const trims = _.replace(' ')('')

function _traverse(fold, transform, data) {
    return cloneDeep(fold(_.map(o => {
        const oo = transform(cloneDeep(o), cloneDeep(data))
        oo.children = _traverse(fold, transform, oo)
        return oo
    })(data.children)))
}
const traverse = _.curry(_traverse)

function extractInfo(item, parent = {}){
    let res = cloneDeep(item)
    res.ll = _.snakeCase(res.label)
    res.li.en = defaultTo(R.path(['li', 'en'], res), res.label)
    res.li = _.fromPairs(_.map(key => [key, defaultTo(R.path(['li', key], res), '')])(lings))
    res.title = _.mapValues((value, key) => defaultTo(R.path(['title', key], res), value))(res.li) // Title Name
    res.file = trims(defaultTo(res.file, res.label)) // FileNameOfComponents
    if(res.typeName === 'pattern'){
        res.pattern = defaultTo(res.pattern, ':' + res.ll) // pattern_name
    }
    res.path = defaultTo(res.pattern, _.snakeCase(res.label)) // path_to_view
    res.routerTo = {name: res.ll} // {name: router_name}
    if(parent.typeName === 'pattern'){ // {name:parent_label, params: {parent_pattern: child_label}
        res = _.defaults(_.omit(parent)('children'))(res)
        res.routerTo = {
            name: parent.ll,
            params: {
                [parent.ll]: res.ll
            }
        }
    }
    return res
}

export const routeData = traverse(_.identity)(extractInfo)({children: metaData})

const toMenuData = (res, o) => _.concat(res)((o.typeName === 'pattern' && !_.isEmpty(o.children)) ? o.children : o)
export const expandPatternData = traverse(_.reduce(toMenuData, []))(_.nthArg(0))({children: routeData})
export const menuData = traverse(_.filter(o => !o.notOnMenu))(_.nthArg(0))({children: expandPatternData})

const list2obj = (res, o) => _.assign(res)({[o.ll]: _.assign(cloneDeep(o))({subMenu: cloneDeep(o.children)})})
export const keyMetaData = traverse(_.reduce(list2obj, {}))(_.nthArg(0))({children: expandPatternData})

