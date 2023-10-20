<template>
  <div class="card">
    <img class="_img" :src="data.coverImage?data.coverImage:'https://res.cloudinary.com/dsgvwxygr/image/upload/v1697827568/blog/c6vxbjeshb4jdue0b1jf.webp'" :alt="'image of '+data.title" loading="lazy">
    <div class="_body">
      <h5 class="_title"><a :href="data.link">{{data.title}}</a></h5>
      <p class="pubDate">Published: <span>{{ data.pubDate }}</span></p>
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
    transition: all 0.5s ease;

    ._title {
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

    .pubDate {
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
</style>
