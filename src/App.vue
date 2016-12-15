<template>
  <div id="app">
    <sheet :data='list'>
      <cell type="string" header = "名字" sources = '$name' ></cell>
      <cell type="string" header = "年龄" sources = '$age' ></cell>
      <cell type="string" header = "职业" sources = '$profession' ></cell>
    </sheet>
      sdfsdf
  </div>
</template>
<script>
import sh,{Sheet, Cell} from '../dist/vue-sheet.js'
console.log(sh)
export default {
  components: {
    Sheet,
    Cell
  },
  data () {
    return {
      list: [
        {
          name: '张三',
          age: 29,
          profession: '前端'
        },
        {
          name: '李四',
          age: 29,
          profession: 'PHP'
        },
        {
          name: '王五',
          age: 29,
          profession: 'PHP'
        }
      ]
    }
  }
}
</script>

<style>
</style>
