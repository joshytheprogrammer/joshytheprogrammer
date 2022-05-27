<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />

    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  data(){
    return {
      article: []
    }
  },
  async fetch(){
    let article = await this.$content('blog', this.$route.params.slug).fetch()

    this.article.push(...article)
  }
}
</script>

<style lang="scss" scoped>

</style>