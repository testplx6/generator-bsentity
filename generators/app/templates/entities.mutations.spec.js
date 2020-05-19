import mutations from '@/store/<%= entityName %>s/<%= entityName %>s.mutations'
import { cloneDeep } from 'lodash'

const <%= entityName %>1 = { id: 1, name: '<%= entityName %>1' }
const <%= entityName %>2 = { id: 2, name: '<%= entityName %>2' }
const baseState = {
  <%= entityName %>s: [<%= entityName %>1, <%= entityName %>2],
  <%= entityName %>NameToCreate: '',
  <%= entityName %>DeletionPending: [1],
  <%= entityName %>CreationPending: false
}

describe('<%= entityName %>s module mutations', () => {
  describe('set<%= entityNameCapitalized %>NameToCreate', () => {
    it('should set <%= entityName %> name to create correctly', () => {
      const state = cloneDeep(baseState)
      mutations.set<%= entityNameCapitalized %>NameToCreate(state, 'toto')
      expect(state).toEqual({
        ...baseState,
        <%= entityName %>NameToCreate: 'toto'
      })
    })
  })

  describe('set<%= entityNameCapitalized %>s', () => {
    it('should set <%= entityName %>s correctly', () => {
      const state = { ...cloneDeep(baseState), <%= entityName %>s: [] }
      mutations.set<%= entityNameCapitalized %>s(state, [<%= entityName %>2, <%= entityName %>1])
      expect(state).toEqual({
        ...baseState,
        <%= entityName %>s: [<%= entityName %>2, <%= entityName %>1]
      })
    })
  })

  describe('add<%= entityNameCapitalized %>s', () => {
    it('should add <%= entityName %> correctly', () => {
      const state = { ...cloneDeep(baseState), <%= entityName %>s: [] }
      mutations.add<%= entityNameCapitalized %>(state, <%= entityName %>1)
      expect(state).toEqual({
        ...baseState,
        <%= entityName %>s: [<%= entityName %>1]
      })
    })
  })

  describe('remove<%= entityNameCapitalized %>ById', () => {
    it('should remove <%= entityName %> correctly', () => {
      const state = cloneDeep(baseState)
      mutations.remove<%= entityNameCapitalized %>ById(state, 2)
      expect(state).toEqual({
        ...baseState,
        <%= entityName %>s: [<%= entityName %>1]
      })
    })
  })

  describe('add<%= entityNameCapitalized %>DeletionPending', () => {
    it('should mark <%= entityName %> as deletion correctly', () => {
      const state = cloneDeep(baseState)
      mutations.add<%= entityNameCapitalized %>DeletionPending(state, 2)
      expect(state).toEqual({
        ...baseState,
        <%= entityName %>DeletionPending: [1, 2]
      })
    })
  })

  describe('remove<%= entityNameCapitalized %>DeletionPending', () => {
    it('should unmark <%= entityName %> as deletion correctly', () => {
      const state = cloneDeep(baseState)
      mutations.remove<%= entityNameCapitalized %>DeletionPending(state, 1)
      expect(state).toEqual({
        ...baseState,
        <%= entityName %>DeletionPending: []
      })
    })
  })

  describe('set<%= entityNameCapitalized %>CreationPending', () => {
    it('should set <%= entityName %> creation pending correctly', () => {
      const state = cloneDeep(baseState)
      mutations.set<%= entityNameCapitalized %>CreationPending(state, true)
      expect(state).toEqual({
        ...baseState,
        <%= entityName %>CreationPending: true
      })
    })
  })
})
