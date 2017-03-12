import Router from 'vue-router'

const Index = resolve => {
    require.ensure(['../views/index/IndexView.vue'], () => {
        resolve(require('../views/index/IndexView.vue'))
    })
}

const Contact = resolve => {
    require.ensure(['../views/contact/ContactView.vue'], () => {
        resolve(require('../views/contact/ContactView.vue'))
    })
}

const News = resolve => {
    require.ensure(['../views/news/NewsView.vue'], () => {
        resolve(require('../views/news/NewsView.vue'))
    })
}

const People = resolve => {
    require.ensure(['../views/people/PeopleView.vue'], () => {
        resolve(require('../views/people/PeopleView.vue'))
    })
}
const CurrentGroup = resolve => {
    require.ensure(['../views/people/subViews/CurrentGroupView.vue'], () => {
        resolve(require('../views/people/subViews/CurrentGroupView.vue'))
    })
}
const FormerGroup = resolve => {
    require.ensure(['../views/people/subViews/FormerGroupView.vue'], () => {
        resolve(require('../views/people/subViews/FormerGroupView.vue'))
    })
}
const PeopleCategory = resolve => {
    require.ensure(['../views/people/subViews/PeopleCategoryView.vue'], () => {
        resolve(require('../views/people/subViews/PeopleCategoryView.vue'))
    })
}
const PersonPage = resolve => {
    require.ensure(['../views/people/subViews/PersonPageView.vue'], () => {
        resolve(require('../views/people/subViews/PersonPageView.vue'))
    })
}

const Publications = resolve => {
    require.ensure(['../views/publications/PublicationsView.vue'], () => {
        resolve(require('../views/publications/PublicationsView.vue'))
    })
}
const Books = resolve => {
    require.ensure(['../views/publications/subViews/BooksView.vue'], () => {
        resolve(require('../views/publications/subViews/BooksView.vue'))
    })
}
const Conferences = resolve => {
    require.ensure(['../views/publications/subViews/ConferencesView.vue'], () => {
        resolve(require('../views/publications/subViews/ConferencesView.vue'))
    })
}
const Teaching = resolve => {
    require.ensure(['../views/teaching/TeachingView.vue'], () => {
        resolve(require('../views/teaching/TeachingView.vue'))
    })
}
const Journals = resolve => {
    require.ensure(['../views/publications/subViews/JournalsView.vue'], () => {
        resolve(require('../views/publications/subViews/JournalsView.vue'))
    })
}

const Research = resolve => {
    require.ensure(['../views/research/ResearchView.vue'], () => {
        resolve(require('../views/research/ResearchView.vue'))
    })
}
const Collaborators = resolve => {
    require.ensure(['../views/research/subViews/CollaboratorsView.vue'], () => {
        resolve(require('../views/research/subViews/CollaboratorsView.vue'))
    })
}
const Facilities = resolve => {
    require.ensure(['../views/research/subViews/FacilitiesView.vue'], () => {
        resolve(require('../views/research/subViews/FacilitiesView.vue'))
    })
}
const Fundings = resolve => {
    require.ensure(['../views/research/subViews/FundingsView.vue'], () => {
        resolve(require('../views/research/subViews/FundingsView.vue'))
    })
}
const Interest = resolve => {
    require.ensure(['../views/research/subViews/InterestView.vue'], () => {
        resolve(require('../views/research/subViews/InterestView.vue'))
    })
}
const Overview = resolve => {
    require.ensure(['../views/research/subViews/OverviewView.vue'], () => {
        resolve(require('../views/research/subViews/OverviewView.vue'))
    })
}

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if(to.hash){
            return {
                selector: to.hash
            }
        }
    },
    routes: [{
            path: '/',
            name: 'home',
            component: Index
        }, {
            path: '/news',
            name: 'news',
            component: News
        }, {
            path: '/research',
            name: 'research',
            component: Research,
            redirect: '/research/overview',
            children: [{
                path: 'overview',
                name: 'overview',
                component: Overview
            }, {
                path: 'interests',
                name: 'interests',
                component: Interest
            }, {
                path: 'facilities',
                name: 'facilities',
                component: Facilities
            }, {
                path: 'fundings',
                name: 'fundings',
                component: Fundings
            }, {
                path: 'collaborators',
                name: 'collaborators',
                component: Collaborators
            }]
        }, {
            path: '/people',
            name: 'people',
            component: People,
            redirect: '/people/current',
            children: [{
                path: 'current',
                name: 'current',
                component: CurrentGroup
            }, {
                path: 'former',
                name: 'former',
                component: FormerGroup
            }, {
                path: ':category',
                name: 'category',
                component: PeopleCategory
            }, {
                path: 'intro/:id',
                name: 'intro',
                component: PersonPage
            }]
        }, {
            path: '/publications',
            name: 'publications',
            component: Publications,
            redirect: '/publications/journals',
            children: [{
                path: 'journals',
                name: 'journals',
                component: Journals
            }, {
                path: 'conferences',
                name: 'conferences',
                component: Conferences
            }, {
                path: 'books',
                name: 'books',
                component: Books
            }]
        }, {
            path: '/teaching',
            name: 'teaching',
            component: Teaching
        }, {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})
