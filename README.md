# vue-smart-table

> Vue 表单组件

## Usage

Basically you write this

```html
<template>
  <sheet :data='list'>
      <cell header='名字' type='string' sources='$name'></cell>
      <cell header='性别' type="string" sources='$sex'></cell>
      <cell header='年龄' type='string' sources='$age'></cell>
      <cell header='职业' type='string'  sources='$profession'></cell>
      <cell header='手机号码' type='string'  sources='$phoneNumber'></cell>
  </sheet>
</template>
<script>
  import {Sheet, Cell} from 'vue-sheet'
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
            age: 26,
            sex: '男',
            profession: 'PHP开发',
            phoneNumber: "159*****232",
          },
          {
            name: '李四',
            age: 21,
            sex: '女',
            profession: '前端开发',
            phoneNumber: "158*****231"
          }
        ]
      }
    }
  }
</script>


```

你将能看到



## Installation

####  使用 Webpack 引入

``` bash
npm install vue-smart-table --save
```

In your app then you write:

``` javascript
import {Sheet, Cell} from "vue-sheet"
Vue.component('sheet', Sheet)
Vue.component('Cell', Cell)
```
Alternatively you can add it to your components options

``` javascript
import {Sheet, Cell} from "vue-sheet"
// ...
components: {
    Sheet,
    Cell
  }
// ...
```