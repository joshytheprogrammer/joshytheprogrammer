<template>
  <div class="work">
    <Heading title="Work" />
    <div class="content">
      <Card v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import Heading from "../Helpers/Headers.vue"
import Card from "../Helpers/Card.vue"
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
    let data = await this.$content('work')
    .only(['imgLink', 'title', 'desc', 'preview', 'github'])
    .sortBy('createdAt', 'desc')
    .fetch()
    
    this.data.push(...data)
  }
}
</script>

<style lang="scss" scoped>
.work {
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  
  .content {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,1fr);
  }

  @media screen and (max-width: $medium) {
    width: 100%;
    .content {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media screen and (max-width: $s-medium) {
    .content {
      display: block;
    }
  }
}
</style>