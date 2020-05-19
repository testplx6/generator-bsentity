import actions from '@/store/<%= entityName %>s/<%= entityName %>s.actions'

jest.mock('@/firebase/user-<%= entityName %>s-db', () => ({
  User<%= entityNameCapitalized %>sDB: jest.mock()
}))

const mockUsersDbReadAll = jest.fn()
const mockUsersDbCreate = jest.fn()
const mockUsersDbDelete = jest.fn()
jest.mock('@/firebase/user-<%= entityName %>s-db', () =>
  jest.fn().mockImplementation(() => ({
    readAll: mockUsersDbReadAll,
    create: mockUsersDbCreate,
    delete: mockUsersDbDelete
  }))
)

const commit = jest.fn()
const dispatch = jest.fn()
const is<%= entityNameCapitalized %>DeletionPending = jest.fn()
const userId = 11
const user = { id: userId }
const <%= entityName %>1 = { id: 1, name: '<%= entityName %>1' }
const <%= entityName %>2 = { id: 2, name: '<%= entityName %>2' }
const rootState = {
  authentication: {
    user
  }
}
const getters = {
  is<%= entityNameCapitalized %>DeletionPending
}

afterEach(() => {
  commit.mockReset()
  dispatch.mockReset()
  mockUsersDbReadAll.mockReset()
  mockUsersDbCreate.mockReset()
  mockUsersDbDelete.mockReset()
  is<%= entityNameCapitalized %>DeletionPending.mockReset()
})

describe('<%= entityName %>s module action', () => {
  describe('getUser<%= entityNameCapitalized %>s', () => {
    it('should set <%= entityName %>s with ones owned by the current user', async () => {
      mockUsersDbReadAll.mockResolvedValue([<%= entityName %>1, <%= entityName %>2])
      await actions.getUser<%= entityNameCapitalized %>s({ commit, rootState })
      expect(commit).toHaveBeenCalledWith('set<%= entityNameCapitalized %>s', [<%= entityName %>1, <%= entityName %>2])
    })
  })

  describe('createUser<%= entityNameCapitalized %>', () => {
    it('should set <%= entityName %> creation as pending first', async () => {
      mockUsersDbCreate.mockResolvedValue(<%= entityName %>2)
      await actions.createUser<%= entityNameCapitalized %>({ commit, rootState })
      expect(commit).toHaveBeenNthCalledWith(
        1,
        'set<%= entityNameCapitalized %>CreationPending',
        true
      )
    })

    it('should add <%= entityName %>', async () => {
      mockUsersDbCreate.mockResolvedValue(<%= entityName %>2)
      await actions.createUser<%= entityNameCapitalized %>({ commit, rootState }, <%= entityName %>1)
      expect(commit).toHaveBeenNthCalledWith(2, 'add<%= entityNameCapitalized %>', <%= entityName %>2)
    })

    it('should set <%= entityName %> creation as not pending after adding <%= entityName %>', async () => {
      mockUsersDbCreate.mockResolvedValue(<%= entityName %>2)
      await actions.createUser<%= entityNameCapitalized %>({ commit, rootState }, <%= entityName %>1)
      expect(commit).toHaveBeenNthCalledWith(
        3,
        'set<%= entityNameCapitalized %>CreationPending',
        false
      )
    })
  })

  describe('triggerAdd<%= entityNameCapitalized %>Action', () => {
    describe('when the name of the <%= entityName %> is empty', () => {
      const state = {
        <%= entityName %>NameToCreate: ''
      }

      it('should not set input name to empty', () => {
        actions.triggerAdd<%= entityNameCapitalized %>Action({ dispatch, state, commit })
        expect(commit).not.toHaveBeenCalled()
      })

      it('should not dispatch create <%= entityName %> action', () => {
        actions.triggerAdd<%= entityNameCapitalized %>Action({ dispatch, state, commit })
        expect(dispatch).not.toHaveBeenCalled()
      })
    })

    describe('when the name of the <%= entityName %> is not empty', () => {
      const state = {
        <%= entityName %>NameToCreate: 'todo'
      }

      it('should set input name to empty', () => {
        actions.triggerAdd<%= entityNameCapitalized %>Action({ dispatch, state, commit })
        expect(commit).toHaveBeenCalledWith('set<%= entityNameCapitalized %>NameToCreate', '')
      })

      it('should dispatch create <%= entityName %> action', () => {
        actions.triggerAdd<%= entityNameCapitalized %>Action({ dispatch, state, commit })
        expect(dispatch).toHaveBeenCalledWith('createUser<%= entityNameCapitalized %>', {
          name: 'todo'
        })
      })
    })
  })

  describe('deleteUser<%= entityNameCapitalized %>', () => {
    describe('when the <%= entityName %> is currently being deleted', () => {
      it('should not do anything', async () => {
        is<%= entityNameCapitalized %>DeletionPending.mockReturnValue(true)
        await actions.deleteUser<%= entityNameCapitalized %>({ commit, rootState, getters }, 1)
        expect(commit).not.toHaveBeenCalled()
      })
    })

    describe('when the <%= entityName %> is not currently being deleted', () => {
      it('should set <%= entityName %> as deletion pending first', async () => {
        getters.is<%= entityNameCapitalized %>DeletionPending.mockReturnValue(false)
        await actions.deleteUser<%= entityNameCapitalized %>({ commit, rootState, getters }, 1)
        expect(commit).toHaveBeenNthCalledWith(
          1,
          'add<%= entityNameCapitalized %>DeletionPending',
          1
        )
      })

      it('should remove <%= entityName %> in store', async () => {
        await actions.deleteUser<%= entityNameCapitalized %>({ commit, rootState, getters }, 1)
        expect(commit).toHaveBeenNthCalledWith(2, 'remove<%= entityNameCapitalized %>ById', 1)
      })

      it('should remove <%= entityName %> in db', async () => {
        await actions.deleteUser<%= entityNameCapitalized %>({ commit, rootState, getters }, 1)
        expect(mockUsersDbDelete).toHaveBeenCalledWith(1)
      })

      it('should set <%= entityName %> as not deletion pending after having removed the <%= entityName %>', async () => {
        await actions.deleteUser<%= entityNameCapitalized %>({ commit, rootState, getters }, 1)
        expect(commit).toHaveBeenNthCalledWith(
          3,
          'remove<%= entityNameCapitalized %>DeletionPending',
          1
        )
      })
    })
  })
})
