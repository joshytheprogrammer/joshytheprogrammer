<template>
  <div class="card"> 
    <div class="s">
      <img class="_img" :src="data.imgLink" alt="project name" loading="lazy">
      <div class="_body">
        <h5 class="_title">{{data.title}}</h5>
        <NuxtLink :to="'/blog/'+data.slug">Read More</NuxtLink>
      </div>
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
  padding: 2px;
  display: block;

  .s {
    border: 1px solid $dark;
    border-radius: 8px;

    ._img {
      width: 100%;
      max-height: 100%;
    }

    ._body {
      display: flex;
      flex-direction: column;
      padding: 0.5rem 0.5rem 0 0.5rem;

      ._title {
        font-weight: 600;
        font-size: 18px;
        line-height: 17px;
      }

      a {
        @include jumbotron-button;
        font-size: 14px;
        background: $light;
        text-decoration: none;
        border: 1px solid $dark;
        color: inherit;

        &:hover {
          background: $dark;
          color: $light;
          box-shadow: none;
        }
      }
    }
  }
}
</style>