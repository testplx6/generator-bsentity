import User<%= entityNameCapitalized %>sDB from '@/firebase/user-<%= entityName %>s-db'

export default {
  /**
   * Fetch <%= entityName %>s of current loggedin user
   */
  getUser<%= entityNameCapitalized %>s: async ({ rootState, commit }) => {
    const user<%= entityNameCapitalized %>Db = new User<%= entityNameCapitalized %>sDB(rootState.authentication.user.id)

    user<%= entityNameCapitalized %>Db.readAll(null, <%= entityName %>s => {
      commit('set<%= entityNameCapitalized %>s', <%= entityName %>s)
    })
  },

  /**
   * Create a <%= entityName %> for current loggedin user
   */
  createUser<%= entityNameCapitalized %>: async ({ commit, rootState }, <%= entityName %>) => {
    const user<%= entityNameCapitalized %>Db = new User<%= entityNameCapitalized %>sDB(rootState.authentication.user.id)

    commit('set<%= entityNameCapitalized %>CreationPending', true)
    const created<%= entityNameCapitalized %> = await user<%= entityNameCapitalized %>Db.create(<%= entityName %>)
    commit('add<%= entityNameCapitalized %>', created<%= entityNameCapitalized %>)
    commit('set<%= entityNameCapitalized %>CreationPending', false)
  },

  /**
   * Create a new <%= entityName %> for current loggedin user and reset <%= entityName %> name input
   */
  triggerAdd<%= entityNameCapitalized %>Action: ({ dispatch, state, commit }) => {
    if (state.<%= entityName %>NameToCreate === '') return

    const <%= entityName %> = { name: state.<%= entityName %>NameToCreate }
    commit('set<%= entityNameCapitalized %>NameToCreate', '')
    dispatch('createUser<%= entityNameCapitalized %>', <%= entityName %>)
  },

  /**
   * Delete a user <%= entityName %> from its id
   */
  deleteUser<%= entityNameCapitalized %>: async ({ rootState, commit, getters }, <%= entityName %>Id) => {
    if (getters.is<%= entityNameCapitalized %>DeletionPending(<%= entityName %>Id)) return

    const user<%= entityNameCapitalized %>sDb = new User<%= entityNameCapitalized %>sDB(rootState.authentication.user.id)

    commit('add<%= entityNameCapitalized %>DeletionPending', <%= entityName %>Id)
    await user<%= entityNameCapitalized %>sDb.delete(<%= entityName %>Id)
    commit('remove<%= entityNameCapitalized %>ById', <%= entityName %>Id)
    commit('remove<%= entityNameCapitalized %>DeletionPending', <%= entityName %>Id)
  }
}
