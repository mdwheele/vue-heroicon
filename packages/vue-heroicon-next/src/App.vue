<template>
  <div id="app">
    <div id="container">
      <Icon class="icon" name="bolt" outline />
      <Icon class="icon" name="battery-0" outline />
      <Icon class="icon" name="battery-50" outline />
      <Icon class="icon" name="battery-100" outline />
      <Icon class="icon" name="rocket-launch" outline />
    </div>
  </div>
</template>

<script setup>
import Icon from './components/Icon.vue'
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 24px;
  height: 24px;
  margin: 10px;
}
</style>