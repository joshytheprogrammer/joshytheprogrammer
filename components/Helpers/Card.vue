<template>
  <div class="card"> 
    <img class="_img" :src="data.imgLink" alt="project name" loading="lazy">
    <div class="_body">
      <h5 class="_title">{{data.title}}</h5>
      <p class="_text">{{data.desc}}</p>
      <div class="_actions">
        <a :href="data.preview" target="_blank" class="preview">Preview</a>
        <a v-if="data.github.exists" :href="data.github.link" target="_blank" class="github">GitHub Repo</a>
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
  display: block;
  margin-bottom: 12px;
  border-radius: 8px;

  // &:hover {
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // }

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
      font-size: 14px;
      line-height: 17px;
    }

    ._text {
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      padding: 2px 0;
    }

    ._actions {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;

      .preview {
        @include button;
        text-decoration: none;
        background: $dark;
        color: $light;
        font-size: inherit;
        font-weight: 400;

        &:hover {
          color: $dark;
          background: $light;
        }
      }

      .github {
        text-decoration: none;
        color: $dark;

        &:hover {
          text-decoration: underline;
        }
      } 
    }
  }
} 
</style>