<template>
  <div v-html="require(`../assets/${name}.svg`)"></div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String
  }
}
</script>
