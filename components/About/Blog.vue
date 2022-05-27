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
    grid-gap: 1rem;
    grid-template-columns: repeat(3,1fr);

    @media screen and (max-width: $mediumDesktop) {
      grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: $small) {
      grid-template-columns: repeat(1,1fr);
    }
  }
}
</style>