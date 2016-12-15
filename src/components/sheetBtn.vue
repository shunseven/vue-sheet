<template>
  <span class="canClick" @click = 'click(data)'>
    {{text}}
  </span>
</template>

<script>
  export default{
    props: ['text', 'click', 'data', 'class']
  }
</script>

<style scoped>
  .canClick{
    color: #337ab7;
    cursor: pointer
  }
</style>