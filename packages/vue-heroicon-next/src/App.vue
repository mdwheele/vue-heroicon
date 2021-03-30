<template>
  <div id="app">
    <div id="container">
      <Icon :name="up ? 'thumb-up' : 'thumb-down'" outline @click="up = !up" />
    </div>
  </div>
</template>

<script>
import Icon from './components/Icon.vue'

export default {
  name: 'App',
  components: { Icon },
  data() {
    return {
      up: false
    }
  }
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