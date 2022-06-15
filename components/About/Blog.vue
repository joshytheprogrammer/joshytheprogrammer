<template>
  <div class="blog">
    <Heading title="Blog" />
    <div class="content">
      <Card v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import Heading from "../Helpers/Headers.vue"
import Card from "../Helpers/B-Card.vue"
export default {
  components: {
    Heading,
    Card
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
  width: 90%;
  margin: 0 auto;
  padding: 1rem;

  .content {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,1fr);
  }

  @media screen and (max-width: $mediumDesktop) {
    width: 100%;
    
    .content {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media screen and (max-width: $small) {
    .content {
      display: block;
    }
  }
}
</style>