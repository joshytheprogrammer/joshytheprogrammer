<template>
  <div class="card"> 
    <img class="_img" :src="data.imgLink" alt="project name" loading="lazy">
    <div class="_body">
      <h5 class="_title">{{data.title}}</h5>
      <p class="_desc">{{data.desc}}</p>
      <div class="actions">
        <a :href="data.github.link">Read More</a>
        <span class="_status" :class="data.status">{{data.status.message}}</span>
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
    padding: 0.5rem;

    ._title {
      font-weight: 600;
      font-size: 16px;
      line-height: 17px;
      padding: 0.2rem 0;
    }

    ._desc {
      font-weight: 400;
      font-size: 12px;
      padding: 0.5rem 0;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0;

      a {
      text-decoration: none;
      font-size: 12px;
      color: inherit;

        &:hover {
          text-decoration: underline;
        }
      }

      ._status {
        background: $success;
        color: $light;
        border-radius: 4px;
        font-size: 12px;
        padding: 0.1rem 0.3rem;
      }
    }
  }
}
</style>