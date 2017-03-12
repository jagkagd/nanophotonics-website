import Router from 'vue-router'

import Index from '../views/index/IndexView.vue'

import Contact from '../views/contact/ContactView.vue'

import News from '../views/news/NewsView.vue'

import People from '../views/people/PeopleView.vue'
import CurrentGroup from '../views/people/subViews/CurrentGroupView.vue'
import FormerGroup from '../views/people/subViews/FormerGroupView.vue'
import PeopleCategory from '../views/people/subViews/PeopleCategoryView.vue'
import PersonPage from '../views/people/subViews/PersonPageView.vue'

import Publications from '../views/publications/PublicationsView.vue'
import Books from '../views/publications/subViews/BooksView.vue'
import Conferences from '../views/publications/subViews/ConferencesView.vue'
import Teaching from '../views/teaching/TeachingView.vue'
import Journals from '../views/publications/subViews/JournalsView.vue'

import Research from '../views/research/ResearchView.vue'
import Collaborators from '../views/research/subViews/CollaboratorsView.vue'
import Facilities from '../views/research/subViews/FacilitiesView.vue'
import Fundings from '../views/research/subViews/FundingsView.vue'
import Interest from '../views/research/subViews/InterestView.vue'
import Overview from '../views/research/subViews/OverviewView.vue'

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
