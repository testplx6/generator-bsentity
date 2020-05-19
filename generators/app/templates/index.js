import state from './<%= entityName %>s.state'
import mutations from './<%= entityName %>s.mutations'
import actions from './<%= entityName %>s.actions'
import getters from './<%= entityName %>s.getters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
