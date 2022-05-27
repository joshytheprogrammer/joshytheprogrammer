<template>
  <section class="page">
    <article>
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <img :src="article.imgLink" :alt="article.alt" />
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

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
}
</style>