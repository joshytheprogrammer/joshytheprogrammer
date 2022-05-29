<template>
  <div class="content">
    <Card v-for="item in data" :key="item.id" :data="item" />
  </div>
</template>

<script>
import Card from "~/components/Helpers/Card.vue"

export default {
  components: {
    Card
  },
  data(){
    return {
      data: []
    }
  },
  async fetch(){
    let data = await this.$content('work').fetch()
    
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

  @media screen and (max-width: $mediumDesktop) {
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (max-width: $small) {
    grid-template-columns: repeat(1,1fr);
  }
}
</style>