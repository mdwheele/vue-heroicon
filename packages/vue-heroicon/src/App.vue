<template>
  <div id="app">
    <div id="container">
      <Icon name="thumb-up" outline />
    </div>
  </div>
</template>

<script>
import Icon from './components/Icon.vue'

export default {
  name: 'App',
  components: { Icon }
}
</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#container {
  width: 300px;
  height: 300px;
}
</style>