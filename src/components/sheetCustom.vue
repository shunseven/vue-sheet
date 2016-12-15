<template>
  <div></div>
</template>

<script>
  export default{
    props: ['Component', 'props', 'data'],
    ready () {
      let el = document.createElement('sheet-item')
      Object.keys(this.props).forEach(item => {
        let prop = item
        if (typeof this.props[item] === 'object') {
          prop = ':' + item
        } else if (typeof this.props[item] === 'function') {
          prop = ':' + item
        }
        el.setAttribute(prop, 'props.' + item)
      })
      el.setAttribute(':data', 'data')
      let com = new this.Component({
        el: el,
        parent: this
      })
      this.$el.appendChild(com.$el)
    }
  }
</script>

<style scoped>

</style>
