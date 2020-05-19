<template>
  <div class="page-wrapper">
    <h1 class="<%= entityName %>s-page-title"><%= entityNameCapitalized %>s page</h1>
    <<%= entityName %>-list class="<%= entityName %>-list"></<%= entityName %>-list>
    <add-<%= entityName %> v-if="networkOnLine"></add-<%= entityName %>>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import <%= entityNameCapitalized %>List from '@/components/<%= entityNameCapitalized %>List'
import Add<%= entityNameCapitalized %> from '@/components/Add<%= entityNameCapitalized %>'

export default {
  components: { <%= entityNameCapitalized %>List, Add<%= entityNameCapitalized %> },
  computed: mapState('app', ['networkOnLine'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.<%= entityName %>s-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.<%= entityName %>-list {
  margin: 20px 0;
}
</style>
