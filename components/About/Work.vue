<template>
  <div class="work">
    <Heading title="Work" />
    <div class="content">
      <div class="card"> 
        <div class="s">
          <img class="_img" src="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2" alt="project name" loading="lazy">
          <div class="_body">
            <h5 class="_title">Full Gospel Official Website</h5>
            <p class="_text">The official FGBMFI website repo. Built with the Nuxtjs Framework.</p>
            <div class="_actions">
              <a href="#" target="_blank" class="preview">Preview</a>
              <a href="#" target="_blank" class="github">GitHub Repo</a>
            </div>
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
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  
  .content {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3,1fr);

    @media screen and (max-width: $mediumDesktop) {
      grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: $small) {
      grid-template-columns: repeat(1,1fr);
    }

    .card {
      padding: 2px;
      display: block;
      border-radius: 4px;
      margin-bottom: 12px;
      
      .s {
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
}
</style>