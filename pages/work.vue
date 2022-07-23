<template>
  <div class="work">
    <Headers>
      <template #heading>
        Work
      </template>
      <template #desc>
        Web apps I created to bring me money.
      </template>
    </Headers>
    <div class="content">
      <Card v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import Card from "~/components/Helpers/Card.vue"
import Headers from "~/components/App/Headers.vue"

export default {
  components: {
    Card,
    Headers
  },
  head: {
    title: 'joshytheprogrammer - My Work'
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
.work {
  .content {
    width: 90%;
    margin: 1rem auto;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

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