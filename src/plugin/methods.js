import _ from 'lodash'
import axios from 'axios'
import R from 'ramda'

function t2i(obj) {
    if(_.isArray(obj)) return R.map(t2i)(obj)
    if(!_.isPlainObject(obj)) return obj
    const ling = ['zh', 'en']
    const res = R.reduce((res, o) => {
        const [name, lang] = o.split('_')[0]
        return R.contains(lang)(ling) ? R.assocPath([name, lang], R.defaultTo(res[o], obj[name + '_en']), res) : res
    }, R.clone(obj))(R.keys(obj))
    return R.map(t2i)(res)
}

export const getData = axios.create({
    baseURL: '/api.php/',
    method: 'get',
    transformResponse: [t2i(JSON.parse(R._))]
})

export const sortBy = prop => R.pipe(R.sortBy(R.path(prop)), R.reverse)

