<template>
   <td><a :target="option.target" :class="class" :style="style" :href="href">{{ text }}</a></td>
</template>

<script>
export default {
  props: {
    $value: Object,
    key: String,
    class: String,
    style: String,
    option: Object
  },
  computed: {
    text: function () {
      var text = this.option.text
      if (text) return text

      var textKey = this.key
      if (textKey) return this.value[textKey]

      return ''
    },

    href: function () {
      var option = this.option
      var params = option.params
      var queries = option.queries
      var href = option.path
      var value

      for(let p in params) {
        value = params[p]
        if (value.startsWith('$')) {
          value = this.$value[value.slice(1)]
        }
        href = href.replace(new RegExp(':' + p + '(?=/|$)', 'g'), value)
      }

      var urlSearch = []
      for(let p in queries) {
        value = queries[p]
        if (value.startsWith('$')) {
          value = this.$value[value.slice(1)]
        }
        urlSearch.push(p + '=' + encodeURIComponent(value))
      }

      var connChar = href.indexOf('?') !== -1 ? '&' : '?'
      href += connChar + urlSearch.join('&')

      return href
    }
  }
}
</script>

<style scoped>

</style>