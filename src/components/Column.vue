<template>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    key: String,
    header: String,
    class: String,
    style: String,
    option: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    }
  },
  created: function () {
    this.$parent.addColumn(this)
    if (this.$options.template) this.$options.template = ''
  }
}
</script>

<style scoped>

</style>