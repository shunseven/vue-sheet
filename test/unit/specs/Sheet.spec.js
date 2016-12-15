import Vue from 'vue'
import Sheet from 'src/components/Sheet'
import Cell from 'src/components/cell'

describe('TestHeader', () => {
  it('should render correct header', () => {
    const vm = new Vue({
      template: '<div><sheet :value = "list"><cell header="名字" type="string" sources="$name"></cell></sheet>sfsdfsdf</div>',
      components: {Sheet, Cell},
      data () {
        return {
          list: [{name: 'lisan'}]
        }
      }
    }).$mount()
    expect(vm.$el.querySelector('.lb-table .table td').textContent.trim()).to.contain('lisan')
    Vue.nextTick(function () {
      expect(vm.$el.querySelector('.lb-table .table td').textContent.trim()).to.contain('lisan')
    })
  })
})