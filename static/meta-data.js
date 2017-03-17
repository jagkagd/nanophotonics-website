// @flow

import _ from 'lodash/fp'

function trims(value) {
    return _.replace(' ')('')(value)
}

const metaData = [
    {
        label: {
            en: "Home",
            zh: "主页"
        },
        name: "Index",
        file: "Index",
        children: []
    }, {
        label: {
            en: "News",
            zh: "组内新闻"
        },
        children: [
            {
                label: {
                    en: "Research Highlight",
                    zh: "科研进展"
                },
                file: "NewsSub"
            }, {
                label: {
                    en: "Latest News",
                    zh: "近期新闻"
                },
                file: "NewsSub"
            }
        ]
    }, {
        label: {
            en: "Research",
            zh: "研究方向"
        },
        children: [
            {
                label: {
                    en: "Overview",
                    zh: "研究概况"
                }
            }, {
                label: {
                    en: "Research Interests",
                    zh: "研究兴趣"
                },
                file: "Interest"
            }, {
                label: {
                    en: "Facilities",
                    zh: "研究条件"
                }
            }, {
                label: {
                    en: "Fundings",
                    zh: "研究项目"
                }
            }, {
                label: {
                    en: "Collaborators",
                    zh: "合作团队"
                }
            }
        ]
    }, {
        label: {
            en: "People",
            zh: "小组成员"
        },
        children: [
            {
                label: {
                    en: "Current Group",
                    zh: "目前成员"
                }
            }, {
                label: {
                    en: "Faculty",
                    zh: "教师"
                },
                pattern: "People Category"
            }, {
                label: {
                    en: "Admin Staff",
                    zh: "行政助理"
                },
                pattern: "People Category"
            }, {
                label: {
                    en: "Post Docs",
                    zh: "博士后"
                },
                pattern: "People Category"
            }, {
                label: {
                    en: "Grad Students",
                    zh: "研究生"
                },
                pattern: "People Category"
            }, {
                label: {
                    en: "Undergrad Students",
                    zh: "本科生"
                },
                pattern: "People Category"
            }, {
                label: {
                    en: "Former Group Members",
                    zh: "以前成员"
                },
                file: "FormerGroup"
            }
        ]
    }, {
        label: {
            en: "Publications",
            zh: "论文论著"
        },
        children: [
            {
                label: {
                    en: "Journal",
                    zh: "期刊论文"
                },
                title: {
                    en: "Journal Papers"
                },
                file: "Journals"
            }, {
                label: {
                    en: "Conference",
                    zh: "会议论文"
                },
                file: "Conferences"
            }, {
                label: {
                    en: "Books",
                    zh: "学术著作"
                }
            }
        ]
    }, {
        label: {
            en: "Teaching",
            zh: "教学工作"
        },
        title: {
            en: "Grad and Undergrad Courses",
            zh: "研究生及本科生课程"
        },
        children: []
    }, {
        label: {
            en: "Contact",
            zh: "联系地址"
        },
        children: []
    }
]

function extractInfo(o){
    o.ll = o.label.en // label
    o.c = {}
    o.c.name = o.name || o.ll // k for route match name
    o.c.path = o.path || o.c.name // k for router path
    o.c.pattern = o.pattern || o.c.path // k for router match path
    o.c.file = o.file || o.c.pattern // for import component
    o.t = {}
    _.map(key => {
        o.t[key] = trims(o.c[key])
    })(_.keys(o.c))
    o.k = {}
    _.map(key => {
        o.k[key] = _.snakeCase(o.c[key])
    })(_.keys(o.c))
    o.routerTo = {}
    o.routerTo.name = o.k.pattern
    if(!_.isNil(o.pattern)){
        o.routerTo.params = {}
        o.routerTo.params[o.k.pattern] = o.k.name
    }
    return o
}

const modifiedMetaData = _.map(o => {
    o = extractInfo(o)
    o.children = _.map(oo => {
        return extractInfo(oo)
    })(o.children)
    return o
})(metaData)

export default modifiedMetaData

