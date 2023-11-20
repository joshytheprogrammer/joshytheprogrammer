<template>
  <div class="ext">
    <div class="container-fluid det">
      <img :src="extension.thumbnail" :alt="'JTP Extensions - '+extension.name">
      <div class="info">
        <h1>{{ extension.name }} <sup> {{ extension.version }}</sup></h1>
        <p>{{ extension.description }}</p>
        <div class="downloads">
          <a v-if="extension.downloads.firefox.link" :href="extension.downloads.firefox.link" :download="extension.slug">Download for Firefox</a>

          <a v-if="extension.downloads.chrome.link" :href="extension.downloads.chrome.link" :download="extension.slug">Download for Chrome</a>
        </div>
      </div>
    </div>
    <div class="container-fluid promos">
      <div class="header">
        <h2>Screenshots & Promos</h2>
      </div>
      <div class="content">
        <p v-if="!extension.promos.images.length && !extension.promos.images.length">No promotional material available...</p>
      </div>
    </div>
    <div class="container-fluid about">
      <div class="header">
        <h2>About this extension</h2>
      </div>
      <div v-html="extension.about" class="styles"></div>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        extension: {}
      }
    },
    async fetch() {
      this.extension = await this.$content('extensions', this.$route.params.slug).fetch()
    }
  }
</script>

<style lang="scss">

.ext {
  width: 100%;
  display: block;
  background: $rGrey;

  .container-fluid {
    background: $white;
    border-radius: 12px;
    margin: 1rem 2rem;
    padding: 1rem;

    .header {
      border-bottom: 2px solid $rGrey;

      h2 {
        padding: 1rem 0;
        font-size: 26px;
        font-weight: 500;
      }
    }


    &.promos {
      .content {
        padding: 1rem 0;
      }
    }

    &.about {
      .styles {
        margin: 1rem 0.4rem;
        font-size: 14px;
        line-height: 1.7777778;

        h1 {
          color: #333;
          font-size: 20px;
          margin-bottom: 20px;
        }

        h2 {
          color: #555;
          font-size: 18px;
          margin-top: 30px;
          margin-bottom: 15px;
        }

        h3 {
          color: #555;
          font-size: 16px;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        p {
          color: #777;
          margin-bottom: 15px;
        }

        ul {
          list-style-type: disc;
          margin-left: 20px;
          color: #777;

          li {
            margin-bottom: 10px;
          }
        }

        ol {
          list-style-type: decimal;
          margin-left: 20px;
          color: #777;

          li {
            margin-bottom: 10px;
          }
        }

        a {
          color: #007bff;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &.det {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      img {
        max-width: 310px;
      }

      .info {
        h1 {
          font-size: 28px;

          sup {
            font-size: 14px;
            font-weight: 400;
          }
        }

        p {
          font-size: 16px;
          padding: 1.1rem 0;
          line-height: 1.7777778;
        }

        .downloads {
          a {
            display: inline-block;
            text-decoration: none;
            background: $dark;
            color: $white;
            border-radius: 4px;
            padding: 12px 16px;
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
