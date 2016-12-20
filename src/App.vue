<template>
  <sheet :data='list'>
      <cell header='名字' type='string' sources='$name'></cell>
      <cell header='性别' type="string" :sources='{text: "$sex", filter:sexFilter() }'></cell>
      <cell header='年龄' type='string' sources='$age'></cell>
      <cell header='职业' type='string'  sources='$profession'></cell>
      <cell header='手机号码' type='button' :sources='{text:"$phoneNumber", click:showPhonNumber }'></cell>
      <cell header="个人网址" type="link" :sources = '{text:"$website", href:{path:"/website", query:{phone:"$phoneNumber"}}}'></cell>
  </sheet>
</template>
<script>
  import {Sheet, Cell} from './components/index.js'
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
            sex: 1,
            profession: 'PHP开发',
            phoneNumber: '136*******125',
            website: '张三的个人网站'
          },
          {
            name: '李四',
            age: 21,
            sex: 0,
            profession: '前端开发',
            phoneNumber: '158*****231',
            website: '李四的个人网站'
          }
        ]
      }
    },
    methods: {
      showPhonNumber (data) {
        window.alert(`你的手机号码是${data.phoneNumber}`)
      },
      sexFilter () {
        return function (value) {
          console.log(value)
          return value === 1 ? '男' : '女'
        }
      }
    }
  }
</script>
<style>
</style>
