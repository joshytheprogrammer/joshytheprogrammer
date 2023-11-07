<template>
  <div class="video-card">
    <img class="video-thumbnail" :src="data.snippet.thumbnails.high.url" :alt="'Thumbnail of ' + data.snippet.title" loading="lazy">
    <div class="video-details">
      <h5 class="video-title">
        <a :href="'https://youtu.be/' + data.id.videoId">{{ data.snippet.title }}</a>
      </h5>
      <div class="video-actions">
        <a :href="'https://youtu.be/' + data.id.videoId">Watch</a>
        <p class="published-date">Published: <span>{{ formattedPublishDate }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    formattedPublishDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(this.data.snippet.publishTime).toLocaleString(undefined, options);
    }
  }
}
</script>

<style lang="scss" scoped>
.video-card {
  display: block;
  margin-bottom: 12px;
  border: 1px solid $dark;
  border-radius: 8px;

  .video-thumbnail {
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }

  .video-details {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;

    .video-title {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;

      a {
        text-decoration: none;
        color: $dark;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .video-actions {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      font-size: 12px;

      a {
        @include button;
        text-decoration: none;
        background: $dark;
        color: $light;
        font-size: inherit;
        font-weight: 400;

        &:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)
        }
      }

      .published-date {
        font-size: 12px;
        font-weight: 400;
        margin: 0.8rem 0;

        span {
          font-style: italic;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
