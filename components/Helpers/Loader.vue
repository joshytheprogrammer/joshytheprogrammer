<template>
  <div class="spinner"></div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.spinner {
  border: 4px solid $light;
  border-top: 4px solid $dark;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
