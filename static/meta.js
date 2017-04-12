import _ from 'lodash/fp'

const View = _.assign({children: []})
const Origin = _.assign(View({typeName: 'origin'}))
const Pattern = _.assign(View({typeName: 'pattern'}))

const metaData = [
    Origin({
        label: {
            en: 'Index',
            zh: '主页'
        },
        li: {
            en: 'Home'
        },
        notPreset: true
    }), 
    Origin({
        label: {
            en: 'News',
            zh: '组内新闻'
        },
        children: [
            Origin({
                label: {
                    en: 'Research Highlights',
                    zh: '科研进展'
                }
            }), 
            Origin({
                label: {
                    en: 'Latest News',
                    zh: '近期新闻'
                }
            })
        ]
    }),
    Origin({
        label: {
            en: 'Research',
            zh: '研究方向'
        },
        children: [
            Origin({
                label: {
                    en: 'Overview',
                    zh: '研究概况'
                }
            }),
            Origin({
                label: {
                    en: 'Research Interests',
                    zh: '研究兴趣'
                }
            }),
            Origin({
                label: {
                    en: 'Facilities',
                    zh: '研究条件'
                }
            }),
            Origin({
                label: {
                    en: 'Fundings',
                    zh: '研究项目'
                }
            }),
            Origin({
                label: {
                    en: 'Collaborators',
                    zh: '合作团队'
                }
            })
        ]
    }),
    Origin({
        label: {
            en: 'People',
            zh: '小组成员'
        },
        children: [
            Origin({
                label: {
                    en: 'Current Group',
                    zh: '目前成员'
                }
            }),
            Pattern({
                pattern: 'People Category',
                matches: [
                    Origin({
                        label: {
                            en: 'Faculty',
                            zh: '教师'
                        }
                    }),
                    Origin({
                        label: {
                            en: 'Admin Staff',
                            zh: '行政助理'
                        }
                    }),
                    Origin({
                        label: {
                            en: 'Post Docs',
                            zh: '博士后'
                        }
                    }),
                    Origin({
                        label: {
                            en: 'Grad Students',
                            zh: '研究生'
                        }
                    }),
                    Origin({
                        label: {
                            en: 'Undergrad Students',
                            zh: '本科生'
                        }
                    })
                ]
            }),
            Origin({
                label: {
                    en: 'Former Group Members',
                    zh: '以前成员'
                },
                file: 'FormerGroup'
            }),
            Pattern({
                label: {
                    en: 'Person Page'
                },
                title: {
                    en: ''
                },
                pattern: 'Person Page',
                patternRouter: 'intro/:id',
                notOnMenu: true
            })
        ]
    }),
    Origin({
        label: {
            en: 'Publications',
            zh: '论文论著'
        },
        children: [
            Origin({
                label: {
                    en: 'Journal',
                    zh: '期刊论文'
                },
                title: {
                    en: 'Journal Papers'
                },
                file: 'Journals'
            }),
            Origin({
                label: {
                    en: 'Conference',
                    zh: '会议论文'
                },
                file: 'Conferences'
            }),
            Origin({
                label: {
                    en: 'Books',
                    zh: '学术著作'
                }
            })
        ]
    }),
    Origin({
        label: {
            en: 'Teaching',
            zh: '教学工作'
        },
        title: {
            en: 'Grad and Undergrad Courses',
            zh: '研究生及本科生课程'
        }
    }),
    Origin({
        label: {
            en: 'Contact',
            zh: '联系地址'
        }
    }),
    Origin({
        label: {
            en: 'Beyond Light',
            zh: '科研之余'
        },
        children: [],
        notOnMenu: true
    })
]

export {metaData as default, patternMap}
