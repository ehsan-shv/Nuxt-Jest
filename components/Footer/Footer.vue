<template>
  <footer class="c-footer">
    <h2>{{ title }}</h2>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
