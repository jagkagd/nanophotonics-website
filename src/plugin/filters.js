// @flow

import _ from 'lodash/fp'
import abbrs from './journalsAbbr.js'

export const formatJournal = (value: string): string => (value in abbrs) ? abbrs[value] : value

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
    if(num === 1){
        return authors[0]
    }else{
        return flag ? authors.slice(0, num).join(', ') + ' and ' + authors[authors.length - 1] : authors.join(', ')
    }
}

export const formatClass = _.kebabCase

