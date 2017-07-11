// @flow

import _ from 'lodash'
import abbrs from './journalsAbbr.js'
import moment from 'moment'
import R from 'ramda'

export const formatJournal = (value: string): string => R.propOr(value, value, abbrs)

export function formatAuthors (value: string, num: number): string {
    let flag = false
    const authors = R.pipe(
        R.split(' and '),
        R.map(R.pipe(
            R.split(', '),
            (o: Array<string>): string => {
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

export const formatClass = _.kebabCase

export function formatDate (value, la) {
    moment.locale({en: 'en', zh: 'zh-cn'}[la])
    const singleFormat = {
        en: 'MMM. D, YYYY',
        zh: 'YYYY年M月D日'
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
    const start = moment(value.date_start)
    if(R.isNil(value.date_end)){
        return start.format(singleFormat[la])
    }
    const end = moment(value.date_end)
    const compareMonth = (start.month() === end.month()) ? 'sM' : 'dM'
    const format = (start.year() === end.year()) ? rangeFormat['sY'][compareMonth] : rangeFormat['dY']
    return start.format(format[la].start) + '-' + end.format(format[la].end)
}

