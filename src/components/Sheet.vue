<template>
 <table>
    <caption hidden>
      <slot></slot>
    </caption>
    <thead>
      <th>ID</th>
      <th v-for="column in cols">
        {{ column.header }}
      </th>
    </thead>
    <tbody>
      <tr v-for="row in records">
        <td>{{ $index }}</td>
        <td v-for="column in cols"
              :$value="row"
              :is="column.type"
              :key="column.key"
              :class="column.class"
              :style="column.style"
              :option="column.option"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import CellLink from './CellLink'
import CellTemp from './CellTemp'
import CellText from './CellText' 
export default {
  components: {
    CellLink,
    CellTemp,
    CellText
  },
  props: {
    records: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      cols: []
    }
  },
  methods: {
    addColumn: function (column) {
      var type = 'cell-' + column.type
      var option = column.option || {}

      var template = column.$options.template
      if (template) {
        if (template.firstChild.tagName !== 'TD') {
          var td = document.createElement('td')
          td.className = column.class
          td.style = column.style

          while(template.childNodes.length) {
            td.appendChild(template.childNodes[0])
          }
          template.appendChild(td)
        }

        type = 'cell-tmpl-' + Date.now().toString().substr(7)
        var components = this.$options.components
        components[type] = Vue.component('cell-tmpl').extend({
          name: type,
          template: template
        })
      }

      this.cols.push({
        type: type,
        header: column.header,
        class: column.class,
        style: column.style,
        key: column.key,
        option: column.option
      })
    }
  }
}
  
</script>

<style scoped>
</style>
