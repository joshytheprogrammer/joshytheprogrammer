<template>
  <div class="blog">
    <Headers>
      <template #heading>
        Blog
      </template>
      <template #desc>
        My lessons, thoughts, projects and life all summarized in written form.
      </template>
    </Headers>
    <div class="loading">
      <Loader v-show="!articles.length" />
    </div>
    <div class="content">
      <Card v-for="item in articles" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import Headers from "~/components/App/Headers.vue"
import Card from "~/components/Helpers/B-Card.vue"
import Loader from "~/components/Helpers/Loader.vue";

import RSSParser from 'rss-parser';

export default {
  head(){
    return {
      title: 'joshytheprogrammer - My Blog',
      meta: [
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
      ]
    }
  },
  components: {
    Card,
    Headers,
    Loader
  },
  data(){
    return {
      articles: [],
    }
  },
  mounted(){
    this.$fetch()
  },
  async fetch(){
    const url = 'https://corsproxy.io/?' + encodeURIComponent('https://blog.joshytheprogrammer.com/rss.xml');

    const parser = new RSSParser({
      customFields: {
        item: ['cover_image']
      }
    });

    try {
      const feed = await parser.parseURL(url);

      // Access the parsed feed data
      const articles = feed.items.map(item => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        coverImage: item.cover_image
      }));

      this.articles = articles;
    } catch (error) {
      console.error('Error parsing RSS feed:', error);
    }
  },
  methods: {

  }
};
</script>


<style lang="scss" scoped>
.blog {
  // margin: auto;

  .loading {
    width: 100%;
    margin: 1rem auto;
  }
  .content {
    width: 90%;
    margin: 1rem auto;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,1fr);

    @media screen and (max-width: $medium) {
      width: 100%;
      padding: 0.9rem;
      grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: $s-medium) {
      display: block;
    }
  }
}
</style>
