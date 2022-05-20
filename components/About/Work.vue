<template>
  <div class="work">
    <Heading title="Work" />
    <div class="content">
      <div class="card"> 
        <img class="_img" src="../../assets/img/fgbmfi-logo.webp" alt="project name">
        <div class="_body">
          <h5 class="_title">Full Gospel Official Website</h5>
          <p class="_text">The official FGBMFI website repo. Built with the Nuxtjs Framework.</p>
          <div class="_actions">
            <a href="#" class="preview">Preview</a>
            <a href="#" class="github">GitHub Repo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../Helpers/Headers.vue"
export default {
  components: {
    Heading
  }
}
</script>

<style lang="scss" scoped>
.work {
  padding: 1rem;
  .content {
    display: grid;
    grid-column-gap: 9px;
    grid-template-columns: repeat(4,1fr);
    padding-bottom: 0.1rem;

    .card {
      padding: 2px;
      border-radius: 4px;
      margin-bottom: 12px;

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
}
</style>