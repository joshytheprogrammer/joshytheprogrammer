<template>
  <section class="page">
    <article class="article">
      <h1 class="head">{{ article.title }}</h1>
      <p class="desc">{{ article.description }}</p>
      <nuxt-content :document="article" />
      <!-- <Newsletter />   -->
      <NuxtLink class="blog go-back-btn" to="/blog">Go Back</NuxtLink>
    </article>
    <section>

    </section>
  </section>
</template>

<script>
export default {
  components: {

  },
  head(){
    return {
      title: this.article.title + ' - joshytheprogrammer\'s blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title + ' - joshytheprogrammer\'s blog'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.imgLink
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.joshytheprogrammer.com/blog/'+this.article.slug
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title + ' - joshytheprogrammer\'s blog'
        },
        { hid: 'twitter:description',
          name: "twitter:description",
          content: this.article.description
        },
        {
          hid: 'twitter:image',
          name: "twitter:image",
          content: this.article.imgLink
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
      ]
    }
  },
  data() {
    return {
      article: {}
    }
  },
  async fetch() {
    this.article = await this.$content('blog', this.$route.params.slug).fetch()
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
    font-size: .99rem;
    font-weight: 400;
    color: #35495e;
    letter-spacing: 0;
    padding: 10px;
    border: 1px solid #dbdfe1;
    border-radius: 4px;
    background-color: #fcfcfc;
  }

  pre, code, samp {
    font-family: 'Roboto Mono';
  }

  ul {
    padding: 2rem;

    li {
      font-size: 1rem;
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
    max-height: 900px;
    border-radius: 4px;
  }

}

.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
  margin: 1rem auto;

  @media screen and (max-width: $medium) {
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

    .blog.go-back-btn {
      @include jumbotron-button
    }
  }
}
</style>
