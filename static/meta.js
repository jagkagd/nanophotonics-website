import _ from 'lodash/fp'

const metaData = [
    {
        label: {
            en: 'Index',
            zh: '主页'
        },
        li: {
            en: 'Home'
        },
        notPreset: true,
        children: []
    }, {
        label: {
            en: 'News',
            zh: '组内新闻'
        },
        children: [
            {
                label: {
                    en: 'Research Highlights',
                    zh: '科研进展'
                }
            }, {
                label: {
                    en: 'Latest News',
                    zh: '近期新闻'
                }
            }
        ]
    }, {
        label: {
            en: 'Research',
            zh: '研究方向'
        },
        children: [
            {
                label: {
                    en: 'Overview',
                    zh: '研究概况'
                }
            }, {
                label: {
                    en: 'Research Interests',
                    zh: '研究兴趣'
                }
            }, {
                label: {
                    en: 'Facilities',
                    zh: '研究条件'
                }
            }, {
                label: {
                    en: 'Fundings',
                    zh: '研究项目'
                }
            }, {
                label: {
                    en: 'Collaborators',
                    zh: '合作团队'
                }
            }
        ]
    }, {
        label: {
            en: 'People',
            zh: '小组成员'
        },
        children: [
            {
                label: {
                    en: 'Current Group',
                    zh: '目前成员'
                }
            }, {
                label: {
                    en: 'Faculty',
                    zh: '教师'
                },
                pattern: 'People Category'
            }, {
                label: {
                    en: 'Admin Staff',
                    zh: '行政助理'
                },
                pattern: 'People Category'
            }, {
                label: {
                    en: 'Post Docs',
                    zh: '博士后'
                },
                pattern: 'People Category'
            }, {
                label: {
                    en: 'Grad Students',
                    zh: '研究生'
                },
                pattern: 'People Category'
            }, {
                label: {
                    en: 'Undergrad Students',
                    zh: '本科生'
                },
                pattern: 'People Category'
            }, {
                label: {
                    en: 'Former Group Members',
                    zh: '以前成员'
                },
                file: 'FormerGroup'
            }, {
                label: {
                    en: 'Person Page'
                },
                title: {
                    en: ''
                },
                pattern: 'Person Page',
                notOnMenu: true
            }
        ]
    }, {
        label: {
            en: 'Publications',
            zh: '论文论著'
        },
        children: [
            {
                label: {
                    en: 'Journal',
                    zh: '期刊论文'
                },
                title: {
                    en: 'Journal Papers'
                },
                file: 'Journals'
            }, {
                label: {
                    en: 'Conference',
                    zh: '会议论文'
                },
                file: 'Conferences'
            }, {
                label: {
                    en: 'Books',
                    zh: '学术著作'
                }
            }
        ]
    }, {
        label: {
            en: 'Teaching',
            zh: '教学工作'
        },
        title: {
            en: 'Grad and Undergrad Courses',
            zh: '研究生及本科生课程'
        },
        children: []
    }, {
        label: {
            en: 'Contact',
            zh: '联系地址'
        },
        children: []
    },{
        label: {
            en: 'Beyond Light',
            zh: '科研之余'
        },
        notOnMenu: true,
        children: [
            {
                label: {
                    en: 'Group Photos',
                    zh: ''
                },
                pattern: 'Activity'
            }, {
                label: {
                    en: 'Da Ming Mountain',
                    zh: '大明山'
                },
                pattern: 'Activity'
            }, {
                label: {
                    en: 'Lighting the Future',
                    zh: ''
                },
                pattern: 'Activity'
            }, {
                label: {
                    en: 'San Qing Moutain',
                    zh: ''
                },
                pattern: 'Activity'
            }, {
                label: {
                    en: 'Zhexi Grand Canyon',
                    zh: ''
                },
                pattern: 'Activity'
            }, {
                label: {
                    en: 'Jiu Xi',
                    zh: ''
                },
                pattern: 'Activity'
            }
        ]
    }
]

const pattern = {
    'People Category': '',
    'Activity': '',
    'Person Page': 'intro/:id'
}

const patternMap = {}
_.map(key => {
    patternMap[key] = pattern[key] || ':' + _.snakeCase(key)
})(_.keys(pattern))

export {metaData as default, patternMap}
