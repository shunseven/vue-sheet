<template>
  <div class="lb-table" >
    <table class="table">
      <thead>
       <tr>
        <th  v-if = 'checkValue'>
           <input v-model="checkAll" type="checkbox">
        </th>
        <th v-for = 'rule in rules' width="{{rule.width}}">
            {{rule.header}}
        </th>
      </tr>
      </thead>
      <tbody v-el:tbody >
        <tr  v-for="(dataIndex,item) in data"  >
        <td v-if = 'checkValue'>
           <input value="{{item[checkKey]}}" v-model="checkValue" type="checkbox">
        </td>
        <td v-for = 'rule in rules' class="{{rule.class}}" :style="rule.style" >
          <template v-if ='rule.type === "box"'>
              <template v-for = "option in rule.sources">
                <a v-if = "option.type === 'link'" v-link='filterKey(option.href,item)'>{{filterKey(option.text,item)}}</a>
                <sheet-btn v-if = 'option.type === "button"' :text='filterKey(option.text,item)' :data='item' :click = 'option.click' ></sheet-btn>
                <sheet-string v-if = 'option.type === "string"'  :text='filterKey(option.text,item)'></<sheet-string>
             </template>
          </template>
          <sheet-btn v-if = 'rule.type === "button"' :text='filterKey(rule.sources.text,item)' :data='item' :click = 'rule.sources.click' ></sheet-btn>
          <a v-if = "rule.type === 'link'" v-link='filterKey(rule.sources.href,item)'>{{filterKey(rule.sources.text,item)}}</a>
          <sheet-custom v-if = '!defaultType.includes(rule.type)' :data = 'item' :props = 'filterKey(rule.sources,item)'  :Component = 'rule.ChildComponent'></sheet-custom>
          <sheet-string v-if = 'rule.type === "string"'  :text='filterKey(rule.sources.text,item)'></<sheet-string>
        </td>
       </tr>
      </tbody>
    </table>
    <slot></slot>
  </div>
</template>

<script>
  import sheetBtn from './sheetBtn'
  import sheetLink from './sheetLink'
  import sheetString from './sheetString'
  import sheetCustom from './sheetCustom'
  export default{
    name: 'Sheet',
    componentName: 'Sheet',
    components: {
      sheetBtn,
      sheetLink,
      sheetString,
      sheetCustom
    },
    props: {
      titles: String,
      data: Array,
      checkKey: {
        type: String,
        default: 'id'
      },
      checkValue: Array
    },
    computed: {
      checkAll: {
        cache: false,
        set (value) {
          if (value) {
            console.log(this.checkKey)
            this.checkValue = this.data.map(item => item[this.checkKey] + '')
          } else {
            this.checkValue = []
          }
          return value
        },
        get () {
          if (!this.data) return false
          console.log(this.checkValue)
          return this.data.length === this.checkValue.length
        }
      }
    },
    data () {
      return {
        rules: [],
        scopeKeys: [],
        defaultType: ['string', 'link', 'button', 'box']
      }
    },
    compiled () {
      this.rules = this.getRule(this.$children)
      this.scopeKeys = [...this.$el.attributes].reduce((ary, item) => {
        if (item.name.startsWith('_v')) {
          ary.push(item.name)
        }
        return ary
      }, [])
      console.log('rule', this.rules)
    },
    watch: {
      data () {
        // 给td添加对应的父集的scoped
        [...this.$els.tbody.getElementsByTagName('td')].forEach(item => {
          this.scopeKeys.forEach(key => {
            item.setAttribute(key, '')
          })
        })
      }
    },
    methods: {
      getOption (target) {
        let sources = target.sources
        if (typeof sources === 'string') {
          sources = {
            text: sources
          }
        }
        return {
          type: target.type,
          class: target.class,
          style: target.style,
          header: target.header,
          sources: sources
        }
      },
      getFilterValue (value, data) {
        if (!value.startsWith('$')) return value
        let key = value.slice(1)
        return data[key]
      },
      filterKey (target, data) {
        if (typeof target === 'string') {
          return this.getFilterValue(target, data)
        } else if (typeof target === 'number' || typeof target === 'function' || Array.isArray(target)) {
          return target
        } else if (typeof target === 'object') {
          let newValue = {}
          Object.keys(target).forEach(key => {
            newValue[key] = this.filterKey(target[key], data)
          })
          return newValue
        }
      },
      getRule (target) {
        return target.map(item => {
          let option = this.getOption(item)
          let type = option.type
          if (!this.defaultType.includes(type)) {
            option.ChildComponent = this.$parent.$options.components[type]
          }
          return option
        })
      }
    }
  }
  
</script>

<style scoped>
  .can-click{
    color: #337ab7;
    cursor: pointer
  }
  .lb-table{
     overflow-x: auto;
  }
  .lb-table input[type=checkbox] {
    margin-right: 10px;
  }

  .lb-table .table {
    margin: 0;
    /* 确保 table 总是小于宽度为 100% 的容器 */
    width: 99.9%;
  }

  .lb-table .table td {
    vertical-align: middle;
    background:#fff;
    border:1px solid #eee
  }

  .lb-table .table > tbody > tr > th {
    background: #e4e4e4;
    border-bottom: 0px;
    border-top: 0px;
    vertical-align: middle;
  }

  .lb-table .table th a {
    display: flex;
    align-items: center;
    color: #333;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  .lb-table .table th p {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 12px;
    transform: scale(0.8);
    color: #999;
    margin-left: 3px;
  }

  .lb-table .table th p span {
    margin: 0;
    top: 0
  }
  .lb-table .listItem{
    font-weight:bold;
    color:#555;
  }
  .lb-table .table > tbody > tr:nth-child(3) td {
    border-top: none;
  }

  .lb-table .hasDetail {
    cursor: pointer;
  }
</style>
