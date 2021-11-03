<template>
  <component v-show="component !== null" :is="component" />
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  name: 'Icon',

  props: {
    name: {
      type: String,
      require: true
    },
    solid: {
      type: Boolean
    },
    outline: {
      type: Boolean
    }
  },

  setup(props) {
    const component = ref(null)

    watchEffect(() => {
      import(`../assets/outline/${props.name}.svg`).then(mod => component.value = mod.default)
    })

    return {
      component
    }
  }
}
</script>
