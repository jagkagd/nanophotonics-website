// @flow

import _ from 'lodash/fp'

export function formatJournal (value: string): string {
    const abbrs = {
        'Accounts of Chemical Research':                                               'Acc. Chem. Res.',
        'Advanced Functional Materials':                                               'Adv. Function. Mater.',
        'Advanced Materials':                                                          'Adv. Mater.',
        'Advances in Optics and Photonics':                                            'Adv. Opt. Photon.',
        'Angewandte Chemie':                                                           'Angew. Chem. Int. Edit.',
        'Applied Optics':                                                              'Appl. Opt.',
        'Applied Pysics B':                                                            'Appl. Phys. B',
        'Applied Physics Letters':                                                     'Appl. Phys. Lett.',
        'Chinese Optics Letters':                                                      'Chin. Opt. Lett.',
        'Chinese Physics Letters':                                                     'Chin. Phys. Lett.',
        'Chinese Science Bulletin':                                                    'Chin. Sci. Bull.',
        'Fronties of Optoelectronics':                                                 'Front. Optoelectron.',
        'IEEE Photonics Technology Letters':                                           'IEEE Photon. Technol. Lett.',
        'IEICE Transactions on Electronics':                                           'IEICE Trans. Electron.',
        'Journal of Applied Polymer Science':                                          'J. Appl. Polym. Sci.',
        'Journal of Leghtwave Technology':                                             'J. Lightwave Technol.',
        'Journal of Non-crystalline Solids':                                           'J. Non-Cryst. Solids',
        'Journal of Optics':                                                           'J. Opt. A',
        'Journal of Physics Chemistry C':                                              'J. Phys. Chem. C',
        'Journal of the American Chemical Society':                                    'J. Am. Chem. Soc.',
        'Journal of The Optical Society of America A-optics Image Science and Vision': 'J. Opt. Soc. Am. A',
        'Journal of The Optical Society of America B-optical Physics':                 'J. Opt. Soc. Am. B',
        'Lab on a Chip':                                                               'Lab Chip',
        'Laser & Photonics Reviews':                                                   'Laser & Photon. Rev.',
        'Microfluidics and Nanofluidics':                                              'Microfluid. Nanofluid.',
        'Nano Letters':                                                                'Nano Lett.',
        'Optics Communications':                                                       'Opt. Commun.',
        'Optics Express':                                                              'Opt. Express',
        'Optics Letters':                                                              'Opt. Lett.',
        'Physica E-low-dimensional Systems & Nanostructures':                          'Physica E',
        'Physical Review A':                                                           'Phys. Rev. A',
        'RSC Advance':                                                                 'RSC Adv.',
        'Scientific Reports':                                                          'Sci. Rep.',
        'Sensors and Actuators B-chemical':                                            'Sensor Actuat. B-chem.',
        'Superconductor Science & Technology':                                         'Supercond. Sci. Tech.'
    }
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

