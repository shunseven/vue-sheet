<template>
  <div style="display:none">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: 'Cell',
    componentName: 'Cell',
    header: {
      type: String
    },
    type: {
      type: String,
      default: 'string'
    },
    style: Object,
    class: String,
    sources: [Object, String]
  },
  compiled () {
  }
}
</script>

<style scoped>

</style>