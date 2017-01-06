<template>
  <td :class="class" :style="style">{{ $value[key] }}</td>
</template>

<script>
export default{
  props: {
    $value: Object,
    key: String,
    class: String,
    style: String,
    option: Object
  }
}
</script>

<style scoped>
</style>