<template>
  <div class="page-wrapper">
    <<%= entityName %>-detail
      v-if="current<%= entityNameCapitalized %>"
      :<%= entityName %>="current<%= entityNameCapitalized %>"
    ></<%= entityName %>-detail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import <%= entityNameCapitalized %>Detail from '@/components/<%= entityNameCapitalized %>Detail'

export default {
  components: { <%= entityNameCapitalized %>Detail },
  props: {
    id: String
  },
  computed: {
    ...mapGetters('<%= entityName %>s', ['get<%= entityNameCapitalized %>ById']),
    current<%= entityNameCapitalized %>() {
      return this.get<%= entityNameCapitalized %>ById(this.id)
    }
  }
}
</script>
