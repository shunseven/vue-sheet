<template>
  <span :class="{'canClick':option&&option.click}" @click='option&&option.click?option.click(data):""' >
    {{filterText(text)}}
  </span>
</template>

<script>
  import Vue from 'vue'
  export default{
    props: {
      data: Object,
      option: {
        type: Object
      },
      text: [String, Number],
      filter: [String]
    },
    methods: {
      filterText (text) {
        if (!this.filter) return text
        if (typeof this.filter === 'function') {
          return this.filter(text)
        }
        let arg = this.filter.trim().split(' ')
        let id = arg.shift()
        return Vue.options.filters[id](...[text, ...arg])
      }
    }
  }
</script>

<style scoped>
  .canClick {
    color:#337ab7;
    cursor: pointer
  }
</style>