import getters from '@/store/<%= entityName %>s/<%= entityName %>s.getters'

const state = { <%= entityName %>DeletionPending: [1, 2, 3] }

describe('<%= entityName %>s module getters', () => {
  describe('is<%= entityNameCapitalized %>DeletionPending', () => {
    it('should return true if the given <%= entityName %> id is marked as pending', () => {
      const result = getters.is<%= entityNameCapitalized %>DeletionPending(state)(1)
      expect(result).toBe(true)
    })

    it('should return false if the given <%= entityName %> id is not marked as pending', () => {
      const result = getters.is<%= entityNameCapitalized %>DeletionPending(state)(4)
      expect(result).toBe(false)
    })
  })
})
