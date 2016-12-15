<template>
  <a :href='handleIfFn(option.href)'>
    {{option.filter?option.filter(text):text}}
  </a>
</template>

<script>
  export default{
    props: ['text', 'option'],
    methods: {
      handleIfFn (targer, data, index) {
        if (typeof targer === 'function') {
          return targer(data, index)
        }
        return targer
      }
    }
  }
</script>

<style scoped>

</style>