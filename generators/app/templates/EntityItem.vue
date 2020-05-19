<template>
  <div class="<%= entityName %>-item">
    <router-link
      class="<%= entityName %>-link"
      :to="{ name: '<%= entityName %>', params: { id: data.id } }"
    >
      #{{ index }} {{ data.name }}
    </router-link>
    <div
      v-if="!disableActions"
      class="delete-btn"
      @click="$emit('delete<%= entityNameCapitalized %>', data.id)"
    >
      {{ is<%= entityNameCapitalized %>DeletionPending ? 'delete in progress...' : 'delete' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number,
    is<%= entityNameCapitalized %>DeletionPending: Boolean,
    disableActions: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.<%= entityName %>-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .<%= entityName %>-link {
    color: $vue-color;
  }

  .delete-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    color: $danger-color;
    border-color: $danger-color;
  }
}
</style>
