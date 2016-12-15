<template>
  <span :class="{'canClick':option&&option.click}" @click='option&&option.click?option.click(data):""' >
    {{text}}
  </span>
</template>

<script>
  export default{
    props: {
      data: Object,
      option: {
        type: Object
      },
      text: [String, Number]
    }
  }
</script>

<style scoped>
  .canClick {
    color:#337ab7;
    cursor: pointer
  }
</style>