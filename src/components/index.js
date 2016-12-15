import Sheet from './Sheet'
import Cell from './cell'

Sheet.install = function (Vue) {
  Vue.component(Sheet.name, Sheet)
}

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Sheet.name, Sheet)
  window.vue.component(Cell.name, Cell)
}

module.exports = {
  Sheet,
  Cell
}
