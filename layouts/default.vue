<template>
  <div class="app">
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from "../components/App/NavBar.vue"
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
}
</style>