<template>
  <div class="card"> 
    <img class="_img" :src="data.imgLink" alt="project name" loading="lazy">
    <div class="_body">
      <h5 class="_title">{{data.title}}</h5>
      <NuxtLink :to="'/blog/'+data.slug">Read More</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss" scoped>
.card {
  display: block;
  margin-bottom: 12px;
  border: 1px solid $dark;
  border-radius: 8px;

  ._img {
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }

  ._body {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.5rem 0 0.5rem;

    ._title {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    }

    a {
      @include button;
      text-decoration: none;
      background: $light;
      font-size: 12px;
      color: inherit;

      &:hover {
        background: $dark;
        color: $light;
      }
    }
  }
}
</style>