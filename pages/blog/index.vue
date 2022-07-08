<template>
  <div class="content">
    <Card v-for="item in data" :key="item.id" :data="item" />
  </div>
</template>

<script>
import Card from "~/components/Helpers/B-Card.vue"

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
.content {
  width: 90%;
  margin: 0 auto;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3,minmax(0,1fr));

  @media screen and (max-width: $medium) {
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (max-width: $medium) {
    grid-template-columns: repeat(1,1fr);
  }
}
</style>