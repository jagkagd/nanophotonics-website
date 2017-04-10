import _ from 'lodash/fp'
import axios from 'axios'

export function t2i(obj) {
    if(_.isArray(obj)) return _.map(o => t2i(o))(obj)
    if(!_.isPlainObject(obj)) return obj
    const ling = ['zh', 'en']
    let res = _.cloneDeep(obj)
    _.map(o => {
        const name = o.split('_')[0]
        const lang = o.split('_')[1]
        if(_.includes(lang)(ling)){
            if(_.isNil(res[name])){
                res[name] = {}
            }
            res[name][lang] = res[o] || obj[name + '_en']
        }
    })(_.keys(obj))
    res = _.mapValues(t2i)(res)
    return res
}

export const getData = axios.create({
    baseURL: '/api.php/',
    method: 'get',
    transformResponse: [o => t2i(JSON.parse(o))]
})

export const sortByDate = _.flow(_.sortBy('date_start'), _.reverse)

