<template>
  <div class="<%= entityName %>-detail">
    <h1>{{ <%= entityName %>.name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    <%= entityName %>: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.<%= entityName %>-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
