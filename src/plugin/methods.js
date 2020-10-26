import _ from 'lodash'
import * as R from 'ramda'
import news from 'data/news'
import latestnews from 'data/latestnews'
import journals from 'data/journals'
import books from 'data/books'
import conferences from 'data/conferences'
import collaborators from 'data/collaborators'
import courses from 'data/courses'
import people from 'data/people'
import subgroups from 'data/subgroups'
import fundings from 'data/fundings'
import researchHighlights from 'data/researchhighlights'

export function t2i (obj) {
    if(_.isArray(obj)) return R.map(t2i)(obj)
    if(!_.isPlainObject(obj)) return obj
    const ling = ['zh', 'en']
    const res = R.reduce((res, o) => {
        const [name, lang] = o.split('_')
        return R.contains(lang, ling) ? R.assocPath([name, lang], R.defaultTo(obj[name + '_en'])(res[o]), res) : res
    }, R.clone(obj))(R.keys(obj))
    return R.map(t2i)(res)
}

export function getResearchHighlights (params, research, journals) {
    return R.map(
        item => R.assoc('paper', R.find(R.propEq('id', R.prop('paper', item)), journals), item),
        researchHighlights
    );
}

let correspondDict = {
    "faculty"              : ['professor', 'associate professor', 'admin staff'],
    "post_docs"            : ['post doctor'],
    "grad_students"        : ['master', 'PhD'],
    "undergrad_students"   : ['undergraduate'],
};

export function getPeople (params) {
    let predicts = []
    if('category' in params){
        if(params['category'] === 'former'){
            predicts.push(
                item => item.year_end !== ""
            )
        }else{
            predicts.push(
                item => R.includes(R.prop('degree', item), correspondDict[params['category']]) && item.year_end === ""
            );
        }
    }
    if('id' in params){
        predicts.push(
            item => R.propEq('id', params['id'], item)
        );
    }
    return R.filter(R.allPass(predicts))(people);
}

const getDataDict = {
    'researchHighlights': params => getResearchHighlights(params, researchHighlights, journals),
    'people': getPeople,
    books,
    conferences,
    journals,
    collaborators,
    courses,
    fundings,
    subgroups,
    latestnews,
    news,
};

const getData = function (request, params) {
    if(R.includes(request, ['researchHighlights', 'people'])){
        return t2i(getDataDict[request](params));
    }
    if(R.includes(request, ['news', 'books', 'conferences', 'journals', 'collaborators', 'courses', 'fundings', 'subgroups', 'latestnews'])){
        return t2i(getDataDict[request]);
    }
    return null;
};

export default {
    getData,
}
