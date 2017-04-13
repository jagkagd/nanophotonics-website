import _ from 'lodash/fp'

const View = _.assign({children: []})
const Pattern = _.assign(View({typeName: 'pattern'}))
const AjaxPattern = _.assign(View({typeName: 'ajax_pattern'}))

const metaData = [
    {
        label: 'Index',
        li: {
            en: 'Home',
            zh: '主页'
        },
        notPreset: true
    }, {
        label: 'News',
        li: {
            zh: '组内新闻'
        },
        children: [
            {
                label: 'Research Highlights',
                li: {
                    zh: '科研进展'
                }
            }, {
                label: 'Latest News',
                li: {
                    zh: '近期新闻'
                }
            }
        ]
    }, {
        label: 'Research',
        li: {
            zh: '研究方向'
        },
        children: [
            {
                label: 'Overview',
                li: {
                    zh: '研究概况'
                }
            }, {
                label: 'Research Interests',
                li: {
                    zh: '研究兴趣'
                }
            }, {
                label: 'Facilities',
                li: {
                    zh: '研究条件'
                }
            }, {
                label: 'Fundings',
                li: {
                    zh: '研究项目'
                }
            }, {
                label: 'Collaborators',
                li: {
                    zh: '合作团队'
                }
            }
        ]
    }, {
        label: 'People',
        li: {
            zh: '小组成员'
        },
        children: [
            {
                label: 'Current Group',
                li: {
                    zh: '目前成员'
                },
            },
            Pattern({
                pattern: 'People Category',
                matches: [
                    {
                        label: 'Faculty',
                        li: {
                            zh: '教师'
                        }
                    }, {
                        label: 'Admin Staff',
                        li: {
                            zh: '行政助理'
                        }
                    }, {
                        label: 'Post Docs',
                        li: {
                            zh: '博士后'
                        }
                    }, {
                        label: 'Grad Students',
                        li: {
                            zh: '研究生'
                        }
                    }, {
                        label: 'Undergrad Students',
                        li: {
                            zh: '本科生'
                        }
                    }
                ]
            }),
            {
                label: 'Former Group Members',
                li: {
                    zh: '以前成员'
                }
                file: 'FormerGroup'
            },
            AjaxPattern({
                label: 'Person Page' ,
                li: {
                    en: ''
                },
                pattern: 'Person Page',
                patternRouter: 'intro/:id',
                notOnMenu: true
            })
        ]
    }, {
        label: 'Publications',
        li: {
            zh: '论文论著'
        },
        children: [
            {
                label: 'Journal',
                li: {
                    en: 'Journal Papers'
                    zh: '期刊论文'
                },
                file: 'Journals'
            }, {
                label: 'Conference',
                li: {
                    zh: '会议论文'
                },
                file: 'Conferences'
            }, {
                label: 'Books',
                li: {
                    zh: '学术著作'
                },
            }
        ]
    }, {
        label: 'Teaching',
        li: {
            zh: '教学工作'
        },
        title: {
            en: 'Grad and Undergrad Courses',
            zh: '研究生及本科生课程'
        }
    }, {
        label: 'Contact',
        li: {
            zh: '联系地址'
        },
    }, {
        label: 'Beyond Light',
        li: {
            zh: '科研之余'
        },
        children: [],
        notOnMenu: true
    }
]

export {metaData as default, patternMap}
