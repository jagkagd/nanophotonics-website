import _ from 'lodash'
import abbrs from './journalsAbbr.js'
import moment from 'moment'
import * as R from 'ramda'

const formatJournal = value => R.propOr(value, value, abbrs)

function formatAuthors (value, num) {
    let flag = false
    const authors = R.pipe(
        R.split(' and '),
        R.map(R.pipe(
            R.split(', '),
            o => {
                const firstName = o[0]
                flag = (o.length > 1)
                const lastNames = flag ? R.pipe(R.split(' '), R.map(o => o[0] + '. '), R.join(''))(o[1]) : ''
                return lastNames + firstName
            }
        ))
    )(value)
    if(num === 1 || authors.length === 1){
        return authors[0]
    }else{
        return flag ? authors.slice(0, num).join(', ') + ' and ' + authors[authors.length - 1] : authors.join(', ')
    }
}

const formatClass = _.kebabCase

export function formatDate (value, la) {
    moment.locale({en: 'en', zh: 'zh-cn'}[la])
    const singleFormat = {
        toD: {
            en: 'MMM. D, YYYY',
            zh: 'YYYY年M月D日',
        },
        toM: {
            en: 'MMM. YYYY',
            zh: 'YYYY年M月',
        }
    }
    const rangeFormat = {
        sY: {
            sM: {
                en: {start: 'MMM. D', end: 'D, YYYY'},
                zh: {start: 'YYYY年M月D日', end: 'D日'}
            },
            dM: {
                en: {start: 'MMM. D', end: 'MMM. D, YYYY'},
                zh: {start: 'YYYY年M月D日', end: 'M月D日'}
            }
        },
        dY: {
            en: {start: 'MMM. D, YYYY', end: 'MMM. D, YYYY'},
            zh: {start: 'YYYY年M月D日', end: 'YYYY年M月D日'}
        }
    }
    if(!R.isNil(R.path(['date', 'la'])(value))){
        return value.date[la]
    }
    let start;
    if(moment(value.date_start, ['YYYY-M-DD', 'YYYY-MM-DD', 'YYYY-M-D', 'YYYY-MM-D'], true).isValid()){
        start = moment(value.date_start, ['YYYY-M-DD', 'YYYY-MM-DD', 'YYYY-M-D', 'YYYY-MM-D'], true);
        if(!('date_end' in value) || R.isEmpty(value.date_end)){
            return start.format(singleFormat.toD[la])
        }
    }
    if(moment(value.date_start, ['YYYY-M', 'YYYY-MM'], true).isValid()){
        start = moment(value.date_start, ['YYYY-M', 'YYYY-MM'], true);
        if(!('date_end' in value) || R.isEmpty(value.date_end)){
            return start.format(singleFormat.toM[la])
        }
    }
    const end = moment(value.date_end)
    const compareMonth = (start.month() === end.month()) ? 'sM' : 'dM'
    const format = (start.year() === end.year()) ? rangeFormat['sY'][compareMonth] : rangeFormat['dY']
    return start.format(format[la].start) + '-' + end.format(format[la].end)
}

export default {
    formatAuthors,
    formatDate,
    formatClass,
    formatJournal,
}
