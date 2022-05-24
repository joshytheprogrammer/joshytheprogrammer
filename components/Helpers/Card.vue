<template>
  <div class="card"> 
    <div class="s">
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
  margin-bottom: 12px;
  
  .s {
    border-radius: 4px;
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    }

    ._img {
      width: 100%;
      max-height: 100%;
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
        font-size: 14px;
        line-height: 17px;
      }

      ._actions {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;

        .preview {
          text-decoration: none;
          background: $dark;
          color: $light;
          @include jumbotron-button;
          font-size: inherit;

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
} 
</style>