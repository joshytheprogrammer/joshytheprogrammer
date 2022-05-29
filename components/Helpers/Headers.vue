<template>
  <div class="heading">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.heading {
  width: 100%;
  padding: 1rem;
  text-align: center;

  span {
    @include header;
  }
}
</style>