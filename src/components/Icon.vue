<template>
  <div v-html="require(`../assets/${style}/${name}.svg`)"></div>
</template>

<script>
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
  computed: {
    style() {
      if (this.solid) {
        return 'solid'
      } else if (this.outline) {
        return 'outline'
      } else {
        return 'solid'
      }
    }
  }
}
</script>
