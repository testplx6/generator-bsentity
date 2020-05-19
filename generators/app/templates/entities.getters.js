import { find } from 'lodash'

export default {
  /**
   * Check if a <%= entityName %> has deletion pending
   */
  is<%= entityNameCapitalized %>DeletionPending: state => <%= entityName %>Id =>
    state.<%= entityName %>DeletionPending.includes(<%= entityName %>Id),

  /**
   * Get <%= entityName %> by id
   */
  get<%= entityNameCapitalized %>ById: state => <%= entityName %>Id =>
    find(state.<%= entityName %>s, <%= entityName %> => <%= entityName %>.id === <%= entityName %>Id)
}
