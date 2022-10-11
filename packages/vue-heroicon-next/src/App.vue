<template>
  <div id="app">
    <div id="container">
      <Icon class="icon" :name="icon" outline @click="toggle" />
      <Icon class="icon" name="battery-0" outline />
      <Icon class="icon" name="battery-50" outline />
      <Icon class="icon" name="battery-100" outline />
      <Icon class="icon" name="rocket-launch" outline />
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import Icon from './components/Icon.vue'

const icon = ref('bolt')

function toggle() {
  if (icon.value === 'bolt') {
    icon.value = 'rocket-launch'
  } else {
    icon.value = 'bolt'
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 32px;
  height: 32px;
  margin: 10px;
}
</style>