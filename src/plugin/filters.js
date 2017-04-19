// @flow

import _ from 'lodash/fp'
import abbrs from './journalsAbbr.js'
import moment from 'moment'
import R from 'ramda'

export const formatJournal = (value: string): string => R.propOr(value, value, abbrs)

export function formatAuthors (value: string, num: number): string {
    let flag = false
    const authors = _.flow(
        _.split(' and '),
        _.map((o: string): Array<string> => _.split(', ')(o)),
        _.map((o: Array<string>): string => {
            const firstName = o[0]
            flag = (o.length > 1)
            const lastNames = flag ? _.flow(_.split(' '), _.map(o => o[0] + '. '), _.join(''))(o[1]) : ''
            return lastNames + firstName
        })
    )(value)
    if(num === 1 || authors.length === 1){
        return authors[0]
    }else{
        return flag ? authors.slice(0, num).join(', ') + ' and ' + authors[authors.length - 1] : authors.join(', ')
    }
}

export const formatClass = _.kebabCase

export function formatDate (value) {
    if(!_.isNil(value.date)){
        return value.date
    }
    const start = moment(value.date_start)
    if(_.isNil(value.date_end)){
        return start.format('MMM. D, YYYY')
    }
    const end = moment(value.date_end)
    if(start.year() === end.year()){
        if(start.month() === end.month()){
            return start.format('MMM. D') + '-' + end.format('D, YYYY')
        }else{
            return start.format('MMM. D') + '-' + end.format('MMM. D, YYYY')
        }
    }else{
        return start.format('MMM. D, YYYY') + '-' + end.format('MMM. D, YYYY')
    }
}

