/* eslint-disable */
// @flow
type book = {
    id: number,
    type: string,
    authors1: string,
    chapter: string,
    title: string,
    authors2: string,
    press: string,
    year: year,
    lang: string
}

type collaborator = {
    id: number,
    group: string,
    university: string,
    country: string,
    url: string
}

type conference = {
    id: number,
    authors: string,
    title: string,
    conference: string,
    date_start: string,
    date_stop: string,
    location: string,
    pubinfo: string,
    type: string,
    award: string,
    lang: string
}

type course = {
    id: number,
    course: string,
    number: string,
    grad: string,
    lectures: string
}

type paper = {
    id: number,
    title: string,
    authors: string,
    journal: string,
    volume: number,
    pages: string,
    year: year,
    type: string,
    href: string
}

type people = {
    id: number,
    name: string,
    email: string,
    tel: string,
    thumb: string,
    cv: string,
    nameZh: string,
    positionAfterGroup: string,
    formerPosition: string,
    degree: string,
    formerPositionZh: string,
    positionAfterGroupZh: string
}

type news = {
    id: number,
    date: string,
    content: string,
    title: string
}

type researchHighlight = {
    id: number,
    paper: paper,
    abstract: string,
    imgpath: string
}

type event = {
    id: number,
    date: string,
    content: string,
    router: string
}
