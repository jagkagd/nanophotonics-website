// @flow

import _ from 'lodash/fp'
import abbrs from './journalsAbbr.js'

export function formatJournal (value: string): string {
    return (value in abbrs) ? abbrs[value] : value
}

export function formatAuthors (value: string, num: number): string {
    let flag = false
    const authors = _.flow(
        _.split(' and '),
        _.map((o: string): Array<string> => _.split(', ')(o)),
        _.map((o: Array<string>): string => {
            const firstName = o[0]
            const lastNames = (o.length > 1) ? _.flow(_.split(' '), _.map((o: string): string => o[0] + '. '), _.join(''))(o[1]) : ''
            if(o.length > 1){
                flag = true
            }
            return lastNames + firstName
        })
    )(value)
    if(num === 1){
        return authors[0]
    }else{
        if(flag){
            return authors.slice(0, num).join(', ') + ' and ' + authors[authors.length - 1]
        }else{
            return authors.join(', ')
        }
    }
}

export function formatClass (value: string): string {
    return _.kebabCase(value)
}

