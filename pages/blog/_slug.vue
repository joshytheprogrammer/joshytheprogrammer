<template>
  <section class="page">
    <article class="article">
      <h1 class="head">{{ article.title }}</h1>
      <p class="desc">{{ article.description }}</p>
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
    font-size: 1.1rem;
    margin: 1.5rem 0;
  }

  a {
    color: $dark;
    transition: color 0.2s ease-in;

    &:hover {
      color: $warning;
    }
  }

  p code {
    background-color: $grey;
    border-radius: 3px;
    padding: 4px 6px;
  }

  pre {
    background: $light;
    color: $dark;
    max-width: 100%;
    line-height: 1.6;
    page-break-inside: avoid;
    display: block;
    border: 1px solid $dark;
    border-left: 6px solid $dark;
    border-radius: 3px;
    padding: 0.5em;
    -webkit-text-size-adjust: none;
    overflow-x: auto;
    white-space: pre;
    word-wrap: break-word;
  }

  pre, code, samp {
    font-family: Roboto Mono,Lucida Sans Typewriter,Lucida Console,monaco,Courrier,monospace;
  }

  ul {
    padding: 2rem;

    li {
      font-size: 1rem;
      padding: 1rem 0;
    }
  }

  ol {
    padding: 2rem;

    li {
      font-size: 1rem;
    }
  }

  img {
    width: 100%;
    max-height: 600px;
    border-radius: 4px;
  }

}

.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
  margin: 1rem auto;

  @media screen and (max-width: $mediumDesktop) {
    margin: 1rem;
  }

  .article {
    margin: 1rem 0;
    font-size: 1.125rem;
    line-height: 1.7777778;

    .head {
      font-size: 2.1428571em;
      line-height: 1.2;
      font-weight: 800;
      margin: 0 auto 0.8em;
      max-width: 65ch;
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