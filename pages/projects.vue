<template>
  <div class="projects">
    <Headers>
      <template #heading>
        Projects
      </template>
      <template #desc>
        Web apps I created for the community, open source projects designed to make lives better.
      </template>
    </Headers>
    <div class="content">
      <Card v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import Card from "~/components/Helpers/P-Card.vue"
import Headers from "~/components/App/Headers.vue"

export default {
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
    let data = await this.$content('projects').fetch()
    
    this.data.push(...data)
  }
}
</script>

<style lang="scss" scoped>
.projects {
  .content {
    width: 90%;
    margin: 1rem auto;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,minmax(0,1fr));

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