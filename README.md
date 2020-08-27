# Vue Heroicons

A simple component for loading Heroicons by [Adam Wathan](https://twitter.com/adamwathan) and [Steve Schoger](https://twitter.com/steveschoger).

Check out https://heroicons.com for a full library.

## Installation
```
npm install vue-heroicon -D
```

### Usage
```
<template>
  <div>
    <Icon name="annotation" solid class="w-6 h-6" />
    <Icon name="annotation" outline class="w-6 h-6" />
  </div>
</template>

<script>
import Icon from 'vue-heroicon'

export default {
  components: { Icon }
}
</script>
```
