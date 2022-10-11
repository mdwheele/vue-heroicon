<template>
  <component v-show="component !== null" :is="component" />
</template>

<script>
import { shallowRef, computed, watchEffect } from 'vue'

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
    const component = shallowRef(null)

    const style = computed(() => {
      if (props.solid) {
        return 'solid'
      } else if (props.outline) {
        return 'outline'
      } else {
        return 'solid'
      }
    })

    watchEffect(() => {
      import(`../assets/${style.value}/${props.name}.svg`).then(mod => component.value = mod.default)
    })


    return {
      component
    }
  }
}
</script>
