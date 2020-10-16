// import { shallowMount } from '@vue/test-utils'
import { t2i, getPeople, getResearchHighlights } from '@/plugin/methods.js'
import people from '@/data/people.js'


describe('t2i', () => {
  it('t2i should combine keys with _en or _zh', () => {
    let obj = {'a': 1, 'b_en': 2, 'b_zh': 3};
    expect(t2i(obj)).toEqual({'a': 1, 'b_en': 2, 'b_zh': 3, 'b': {'en': 2, 'zh': 3}})
  })
  it('t2i should combine keys with only _en or _zh', () => {
    let obj = {'a': 1, 'b_en': 2};
    expect(t2i(obj)).toEqual({'a': 1, 'b_en': 2, 'b': {'en': 2}})
  })
})

describe('getPeople', () => {
  it('getPeople filter category correctly', () => {
    expect(getPeople({category: 'faculty'}, people)).toContain(people[0])
  })
  it('getPeople filter id correctly', () => {
    expect(getPeople({id: '1'}, people)).toContain(people[0])
  })
})

describe('getResearchHighlights', () => {
  it('getResearachHighlights get correct paper info', () => {
    let obj = [{'paper': 3, 'title': 'example'}];
    let journals = [{'id': 1, 'jour': 'a'}, {'id': 3, 'jour': 'b'}];
    expect(getResearchHighlights({}, obj, journals)).toEqual([{'paper': {'id': 3, 'jour': 'b'}, 'title': 'example'}])
  })
})