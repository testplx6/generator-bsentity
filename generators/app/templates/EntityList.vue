<template>
  <div>
    <p v-if="<%= entityName %>s === null" class="infos-label">Loading...</p>
    <p v-if="<%= entityName %>s && !<%= entityName %>s.length" class="infos-label">
      You don't have any <%= entityName %> yet
    </p>
    <<%= entityName %>-item
      v-for="(<%= entityName %>, index) in <%= entityName %>s"
      :key="<%= entityName %>.id"
      class="<%= entityName %>-row"
      :index="index"
      :is-<%= entityName %>-deletion-pending="is<%= entityNameCapitalized %>DeletionPending(<%= entityName %>.id)"
      :disable-actions="!networkOnLine"
      :data="<%= entityName %>"
      @delete<%= entityNameCapitalized %>="deleteUser<%= entityNameCapitalized %>"
    ></<%= entityName %>-item>
  </div>
</template>

<script>
import <%= entityNameCapitalized %>Item from '@/components/<%= entityNameCapitalized %>Item'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { <%= entityNameCapitalized %>Item },
  computed: {
    ...mapGetters('<%= entityName %>s', ['is<%= entityNameCapitalized %>DeletionPending']),
    ...mapState('<%= entityName %>s', ['<%= entityName %>s']),
    ...mapState('app', ['networkOnLine'])
  },
  methods: mapActions('<%= entityName %>s', ['deleteUser<%= entityNameCapitalized %>'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.<%= entityName %>-row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  justify-content: space-between;
}
</style>
