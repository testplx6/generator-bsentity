<template>
  <div class="<%= entityName %>-action-bar">
    <input
      placeholder="<%= entityName %> name..."
      class="<%= entityName %>-name-input"
      type="text"
      :value="<%= entityName %>NameToCreate"
      @input="set<%= entityNameCapitalized %>NameToCreate($event.target.value)"
      @keypress.enter="triggerAdd<%= entityNameCapitalized %>Action"
    />
    <div
      :class="{ disabled: <%= entityName %>CreationPending }"
      class="create-<%= entityName %>-btn"
      @click="triggerAdd<%= entityNameCapitalized %>Action"
    >
      add <%= entityName %>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  computed: mapState('<%= entityName %>s', [
    '<%= entityName %>NameToCreate',
    '<%= entityName %>CreationPending'
  ]),
  methods: {
    ...mapMutations('<%= entityName %>s', ['set<%= entityNameCapitalized %>NameToCreate']),
    ...mapActions('<%= entityName %>s', ['triggerAdd<%= entityNameCapitalized %>Action'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.<%= entityName %>-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;

  .<%= entityName %>-name-input {
    padding-left: 5px;
    height: 30px;
    width: 150px;
    outline: none;
    font: inherit;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
  }

  .create-<%= entityName %>-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    border-color: #2c3e50;

    &.disabled {
      pointer-events: none;
      background-color: #aaa;
    }

    &:hover {
      color: $vue-color;
      border-color: $vue-color;
    }
  }
}
</style>
