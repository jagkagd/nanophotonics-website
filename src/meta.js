import _ from 'lodash/fp'

const Pattern = _.assign({typeName: 'pattern'})

export default [
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
            zh: '团队成员'
        },
        children: [
            {
                label: 'Current Group',
                li: {
                    zh: '目前成员'
                }
            },
            Pattern({
                label: 'People Category',
                children: [
                    {
                        label: 'Faculty',
                        li: {
                            zh: '教师'
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
                    }                ]
            }),
            {
                label: 'After Graduation',
                li: {
                    zh: '毕业去向'
                }
            }, {
                label: 'Former Group Members',
                li: {
                    zh: '以前成员'
                },
                file: 'FormerGroup'
            },
            Pattern({
                label: 'Person Page',
                li: {
                    en: ''
                },
                pattern: 'intro/:id',
                notOnMenu: true,
                notOnSub: true
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
                    en: 'Journal Papers',
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
                }
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
        label: 'Subgroups',
        li: {
            zh: 'Subgroups'
        }
    }, {
        label: 'Beyond Light',
        li: {
            zh: '科研之余'
        },
        notOnMenu: true,
        children: [
            {
                label: 'Group Photos',
                li: {
                    zh: '研究组合照'
                }
            },
            Pattern({
                label: 'Activity',
                children: [
                    {
                        label: 'Huihang Ancient Trail',
                        li: {
                            zh: '徽杭古道'
                        }
                    }, {
                        label: "New Year's Party",
                        li: {
                            zh: '新年晚会'
                        }
                    }, {
                        label: 'Yixing Hiking',
                        li: {
                            zh: '秋季毅行'
                        }
                    }, {
                        label: 'Ultra Trail Race',
                        li: {
                            zh: '越野赛'
                        }
                    }, {
                        label: 'Wu Yuan',
                        li: {
                            zh: '婺源'
                        }
                    }, {
                        label: 'Mount Huangshan',
                        li: {
                            zh: '黄山'
                        }
                    }, {
                        label: 'Da Ming Mountain',
                        li: {
                            zh: '大明山'
                        }
                    }, {
                        label: 'Lighting the Future',
                        li: {
                            zh: '点亮未来'
                        }
                    }, {
                        label: 'San Qing Mountain',
                        li: {
                            zh: '三清山'
                        }
                    }, {
                        label: 'Zhexi Grand Canyon',
                        li: {
                            zh: '浙西大峡谷'
                        }
                    }, {
                        label: 'Jiu Xi',
                        li: {
                            zh: '九溪'
                        }
                    }, {
                        label: 'More Activities',
                        li: {
                            zh: '更多活动'
                        }
                    }
                ]
            })
        ]
    }
]
