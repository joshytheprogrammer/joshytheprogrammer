<template>
  <section class="page">
    <article class="article">
      <h1 class="head">{{ article.title }}</h1>
      <p class="desc">{{ article.description }}</p>
      <!-- <img :src="article.imgLink" :alt="article.alt" /> -->
      <nuxt-content :document="article" />
    </article>
    <section>

    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  }
}
</script>

<style lang="scss">
.nuxt-content {
  p {
    font-size: 0.9rem;
  }

  a {
    color: $dark;
    transition: color 0.2s ease-in;

    &:hover {
      color: $warning;
    }
  }

  pre {
    width: 450px;
    padding: 12px;
    font-size: 0.9rem;
    border-radius: 4px;
    background: $light;
    border: 2px solid $dark;
    border-left: 12px solid $dark;

    @media screen and (max-width: $mediumDesktop) {
      width: 90%;
    }
  }

  ul {
    padding: 2rem;

    li {
      font-size: 0.9rem;
    }
  }

  ol {
    padding: 2rem;

    li {
      font-size: 0.9rem;
    }
  }

  img {
    width: 100%;
    max-height: 600px;
    border-radius: 4px;
  }

}

.page {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin: 1rem;

  @media screen and (max-width: $mediumDesktop) {
    display: block;
  }

  .article {
    margin: 1rem 0;

    .head {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: 900;
    }

    .desc {
      font-style: italic;
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
}
</style>