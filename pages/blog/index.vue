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
    <div class="content">
      <Card v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import Card from "~/components/Helpers/B-Card.vue"
import Headers from "~/components/App/Headers.vue"

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
    Headers
  },
  data(){
    return {
      data: []
    }
  },
  async fetch(){
    let data = await this.$content('blog').fetch()
    
    this.data.push(...data)
  }
}
</script>

<style lang="scss" scoped>
.blog {
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