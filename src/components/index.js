import Sheet from './Sheet'
import Column from './Column'

Sheet.install = function (Vue) {
  Vue.component('Sheet', Sheet)
}

Column.install = function (Vue) {
  Vue.component('Column', Column)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Sheet', Sheet)
  window.vue.component('Column', Column)
}

module.exports = {
  Sheet,
  Column
}
