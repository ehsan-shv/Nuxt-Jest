<template>
  <aside class="c-side">
    <input
      v-model.trim="$v.name.$model"
      type="text"
      placeholder="name"
    >
  </aside>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Side',
  data () {
    return {
      name: ''
    }
  },
  validations: {
    name: {
      required
    }
  }
}
</script>
