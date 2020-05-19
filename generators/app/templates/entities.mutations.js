export default {
  /* <%= entityNameCapitalized %> input name */
  set<%= entityNameCapitalized %>NameToCreate: (state, <%= entityName %>NameToCreate) =>
    (state.<%= entityName %>NameToCreate = <%= entityName %>NameToCreate),

  /* <%= entityNameCapitalized %>s */
  set<%= entityNameCapitalized %>s: (state, <%= entityName %>s) => (state.<%= entityName %>s = <%= entityName %>s),
  add<%= entityNameCapitalized %>: (state, <%= entityName %>) => state.<%= entityName %>s.push(<%= entityName %>),
  remove<%= entityNameCapitalized %>ById: (state, <%= entityName %>Id) => {
    const index = state.<%= entityName %>s.findIndex(<%= entityName %> => <%= entityName %>.id === <%= entityName %>Id)
    state.<%= entityName %>s.splice(index, 1)
  },

  /* <%= entityNameCapitalized %>s deletion */
  add<%= entityNameCapitalized %>DeletionPending: (state, <%= entityName %>Id) =>
    state.<%= entityName %>DeletionPending.push(<%= entityName %>Id),
  remove<%= entityNameCapitalized %>DeletionPending: (state, <%= entityName %>Id) => {
    const index = state.<%= entityName %>s.findIndex(<%= entityName %> => <%= entityName %>.id === <%= entityName %>Id)
    state.<%= entityName %>DeletionPending.splice(index, 1)
  },

  /* <%= entityNameCapitalized %> creation */
  set<%= entityNameCapitalized %>CreationPending: (state, value) =>
    (state.<%= entityName %>CreationPending = value)
}
